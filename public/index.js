const createBlogPost =(id, title, body, author, createdDate) =>{
    const blogPostContainer = document.createElement('div');
    blogPostContainer.classList.add('blog-post');
    blogPostContainer.dataset.postid = id;

    const blogPostTitle = document.createElement('h2');
    blogPostTitle.classList.add('blog-post-title');
    blogPostTitle.textContent = title;

    blogPostContainer.appendChild(blogPostTitle);

    const blogPostmeta = document.createElement('p');
    blogPostmeta.classList.add('blog-post-meta');
    blogPostmeta.textContent = createdDate + ' by ' + author;

    const blogPostEditButton = document.createElement('a');
    blogPostEditButton.classList.add('btn');
    blogPostEditButton.classList.add('btn-link');
    blogPostEditButton.classList.add('ml-3');
    blogPostEditButton.href= '/' + id + '/edit'
    blogPostEditButton.textContent = 'Edit';

    const blogPostDeleteButton =document.createElement('button')
    blogPostDeleteButton.classList.add('btn');
    blogPostDeleteButton.classList.add('btn-link');
    blogPostDeleteButton.classList.add('ml-3');
    blogPostDeleteButton.onclick = null;
    blogPostDeleteButton.style.color ='red';
    blogPostDeleteButton.textContent= 'Delete'

    blogPostmeta.appendChild(blogPostEditButton);
    blogPostmeta.appendChild(blogPostDeleteButton);

    const blogPostContent =document.createElement('p');
    blogPostContent.textContent =body;

    blogPostContainer.appendChild(blogPostContent);

    const blogMainContainer = document.querySelector('.blog-main');
    blogMainContainer.appendChild(blogPostContainer);
};

document.addEventListener('DOMContentLoaded',async() =>{
    try{
   const response =await fetch('http://localhost:3000/posts')
   const data =await response.json();
   const posts =await data.posts;
   posts.map(post => createBlogPost(post.id, post.title, post.body, post.author, post.createdDate))
} catch(error){
    console.log(error)
}
})