$(() => {
    "use strict";

    const BASE_API = 'http://jsonplaceholder.typicode.com';
    const API = {
        users:     `${BASE_API}/users`,
        posts:     `${BASE_API}/posts`,
        comments: `${BASE_API}/comments`
    }

    $('#fetch').on('click', (evt) => {
        const userId = $('#userId').val();
        const userUrl = `${API.users}/${userId}`;

        $.get(userUrl)
            .done(showUserInfo);
        
        $.get(API.posts, {userId: userId})
            .done(showPosts);
    });

    $('#posts').on('click', '.comments', (evt) => {
        const postId = $(evt.target).data('post-id');

        $.get(API.comments, {postId: postId})
            .done(showComments);
    });

    function showUserInfo(user) {
        const fields = ['id', 'name', 'username', 'email', 'phone', 'website'];
        let content = '';

        fields.forEach(field => {
            content += `
                <dl>
                    <dt>${field}</dt>
                    <dd>${user[field]}</dd>
                </dl>`;
        });

        $('#user-info').html(content);
    }

    function showPosts(posts) {
        let content = '';

        posts.forEach(post => {
            content += `
                <ul>
                    <li>${post.title}</li>
                    <li>${post.body}</li>
                </ul>
                <input type="button" value="Comments" data-post-id="${post.id}" class="comments" />
                `;
        });
        
        $('#posts').html(content);
    }

    function showComments(comments) {
        let content = '';
        let liComments = '';

        comments.forEach(comment => {
            liComments += `<li>${comment.body}</li>`;
        });

        content = `
            <ul>
                ${liComments}
            </ul>`;
        
        $('#comments').html(content);
    }
});
