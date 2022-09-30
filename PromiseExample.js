const users = [
    {
        id: 1,
        name: 'Admin'
    },
    {
        id: 2,
        name: 'Member'
    }
];

const comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Binh luan cua Admin'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Binh luan cua User'
    },
    {
        id: 3,
        user_id: 2,
        content: 'Binh luan cua User2'
    },
    {
        id: 4,
        user_id: 2,
        content: 'Binh luan cua User3'
    },
    {
        id: 5,
        user_id: 1,
        content: 'Binh luan cua Admin2'
    }
];

const getComments = () => {
    return new Promise((resolve, reject) => { setTimeout(() => { return resolve(comments) }, 2000) });
}

const getUsers = () => {
    return new Promise((resolve, reject) => { setTimeout(() => { return resolve(users) }, 5000) });
}

Promise.all([getComments(), getUsers()])
    .then((data) => {
        const dataComments = data[0];
        const dataUser = data[1];
        const html = [];
        dataComments.forEach((comment) => {
            const user = dataUser.find((user) => { return user.id === comment.user_id });
            html.push(`<li>${user.name}: ${comment.content}</li>`);
        })
        const commentBlockElement = document.querySelector('.comment-block');
        commentBlockElement.innerHTML = html.join('');
    })
    .catch(() => {

    })
    .finally(() => {
        console.log('Finally');
    })