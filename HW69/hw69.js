{
    let Blog = {};
    (function () {
        'use strict';

        var usersPage, blogview, next, back, home;
        Blog.utils = {};

        Blog.init = function () {
            Blog.posts = {};
            usersPage = $('#usersPage');
            blogview = $('#blogview');
            back = $('.nav').children('#back');
            next = $('.nav').children('#next');
            home = $('#home');
            bindUI();
            Blog.loadMain();
        }

        function bindUI() {
            back.click(backClick);
            next.click(nextClick);
            home.click(Blog.loadMain);
        }

        function backClick(e) {
            blogview.empty();
            for (let i = 0; i < 3; i++) {
                //maybe get length of posts
                if (Blog.visible == 0) Blog.visible = 10;
                blogview.prepend(Blog.posts[Blog.currentUser][--Blog.visible]);
            }
        }

        function nextClick(e) {
            blogview.empty();
            Blog.visible += 2;
            for (let i = 0; i < 3; i++) {
                //maybe get length of posts
                if (Blog.visible == 9) Blog.visible = -1;
                blogview.append(Blog.posts[Blog.currentUser][++Blog.visible]);
            }
            Blog.visible -= 2;
        }

        Blog.loadMain = function () {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(function (r) { return r.json() })
                .then(loadMain);
        }

        function loadMain(response) {
            back.css('display', 'none');
            next.css('display', 'none');
            home.css('display', 'none');
            blogview.empty();
            for (const key in response) {
                if (response.hasOwnProperty(key)) {
                    const element = response[key];
                    const div = document.createElement('div');
                    div.addEventListener('click', userClick);
                    div.data = element.id;
                    const name = document.createElement('h2');
                    const site = document.createElement('h3');
                    const info = document.createElement('h4');
                    name.innerHTML = element.name;
                    site.innerHTML = element.website;
                    const company = element.company;
                    info.innerHTML = `<p>${company.name}</p>
                    <p>${company.catchPhrase}</p>
                    <p>${company.bs}</p>`;
                    div.appendChild(name);
                    div.appendChild(info);
                    div.appendChild(site);
                    usersPage.append(div);
                }
            }
        }

        // Warning! Unnecessary code. ;)
        Blog.loadUser = function (id) {
            userClick({ currentTarget: { data: id } });
        }

        function userClick(e) {
            Blog.currentUser = e.currentTarget.data;
            fetch('https://jsonplaceholder.typicode.com/posts?userId=' + e.currentTarget.data)
                .then(function (r) { return r.json() })
                .then(parsePost);
            back.css('display', 'initial');
            next.css('display', 'initial');
            home.css('display', 'initial');
            usersPage.empty();
        }

        function parsePost(response) {
            Blog.posts[response[0].userId] = Blog.utils.postToElement(response);
            blogview.empty();

            var i = 0;
            Blog.posts[response[0].userId].forEach((div) => {

                const commentDiv = document.createElement('div');
                commentDiv.className = 'commentdiv';
                div.appendChild(commentDiv);

                const comments = document.createElement('button');
                comments.className = 'comments';
                comments.innerHTML = 'Show Comments';
                comments.addEventListener('click', () => { if (comments.innerHTML === 'Show Comments') { showComments(div) } else { hideComments(div) } });
                div.appendChild(comments);

                if (i++ < 3) blogview.prepend(div);
                Blog.visible = 0;
            });

            window.location.href = '#blogview';

        }

        function showComments(div) {
            fetch('https://jsonplaceholder.typicode.com/comments?postId=' + div.data)
                .then(r => { return r.json() })
                .then(addComments);

            div.querySelector('.comments').innerHTML = 'Hide Comments';
            function addComments(response) {
                const commentDiv = div.querySelector('.commentdiv');


                for (const key in response) {
                    if (response.hasOwnProperty(key)) {
                        const element = response[key];

                        const div = document.createElement('div');
                        const name = document.createElement('h4');
                        const email = document.createElement('h4');
                        const body = document.createElement('p');
                        div.data = element.id;
                        name.innerHTML = element.name;
                        email.innerHTML = element.email;
                        body.innerHTML = element.body;
                        div.appendChild(name);
                        div.appendChild(email);
                        div.appendChild(body);
                        commentDiv.appendChild(div);
                    }
                }
            }
        }

        function hideComments(div) {
            div.querySelector('.commentdiv').innerHTML = '';
            div.querySelector('.comments').innerHTML = 'Show Comment';

        }

        Blog.utils.postToElement = function (posts) {

            let elements = [];

            for (const key in posts) {
                if (posts.hasOwnProperty(key)) {
                    const element = posts[key];

                    const div = document.createElement('div');
                    const title = document.createElement('h2');
                    const body = document.createElement('p');
                    div.data = element.id;
                    title.innerHTML = element.title;
                    body.innerHTML = element.body;
                    div.appendChild(title);
                    div.appendChild(body);
                    elements.push(div);
                }
            }
            return elements;
        }








    }());

    Blog.init();
}