const container = document.getElementById('container');
const posts = [
  {
    id: 1,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/300?image=171',
    author: {
      name: 'Phil Mangione',
      image: 'https://unsplash.it/300/300?image=15',
    },
    likes: 80,
    created: '2021-06-25',
  },
  {
    id: 2,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=112',
    author: {
      name: 'Sofia Perlari',
      image: 'https://unsplash.it/300/300?image=10',
    },
    likes: 120,
    created: '2021-09-03',
  },
  {
    id: 3,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=234',
    author: {
      name: 'Chiara Passaro',
      image: 'https://unsplash.it/300/300?image=20',
    },
    likes: 78,
    created: '2021-05-15',
  },
  {
    id: 4,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=24',
    author: {
      name: 'Luca Formicola',
      image: null,
    },
    likes: 56,
    created: '2021-04-03',
  },
  {
    id: 5,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=534',
    author: {
      name: 'Alessandro Sainato',
      image: 'https://unsplash.it/300/300?image=29',
    },
    likes: 95,
    created: '2021-03-05',
  },
  {
    id: 6,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=538',
    author: {
      name: 'Stefano Bichicchi',
      image: 'https://unsplash.it/300/300?image=27',
    },
    likes: 105,
    created: '2021-03-10',
  },
  {
    id: 7,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=538',
    author: {
      name: 'Alessandro Sainato',
      image: 'https://unsplash.it/300/300?image=29',
    },
    likes: 95,
    created: '2021-03-05',
  },
  {
    id: 8,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=538',
    author: {
      name: 'Alessandro Sainato',
      image: 'https://unsplash.it/300/300?image=29',
    },
    likes: 95,
    created: '2021-03-05',
  },
  {
    id: 9,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=538',
    author: {
      name: 'Alessandro Sainato',
      image: 'https://unsplash.it/300/300?image=29',
    },
    likes: 95,
    created: '2021-03-05',
  },
  {
    id: 10,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=538',
    author: {
      name: 'Alessandro Sainato',
      image: 'https://unsplash.it/300/300?image=29',
    },
    likes: 95,
    created: '2021-03-05',
  },
  {
    id: 11,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=534',
    author: {
      name: 'Alessandro Sainato',
      image: 'https://unsplash.it/300/300?image=29',
    },
    likes: 95,
    created: '2021-03-05',
  },
  {
    id: 12,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=574',
    author: {
      name: 'Alessandro Sainato',
      image: 'https://unsplash.it/300/300?image=79',
    },
    likes: 95,
    created: '2021-03-05',
  },
  {
    id: 13,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=334',
    author: {
      name: 'Piero Guerra',
      image: '',
    },
    likes: 5,
    created: '2021-03-05',
  },
  {
    id: 14,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=500',
    author: {
      name: 'Alessandro Barbuffo',
      image: 'https://unsplash.it/300/300?image=89',
    },
    likes: 95,
    created: '2021-03-05',
  },
  {
    id: 15,
    content:
      'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    media: 'https://unsplash.it/600/400?image=524',
    author: {
      name: 'Giorgio Sainato',
      image: 'https://unsplash.it/300/300?image=39',
    },
    likes: 95,
    created: '2021-03-05',
  },
];

function createPost(postData) {
  const post = document.createElement('div');
  post.classList.add('post');

  const postHeader = document.createElement('div');
  postHeader.classList.add('post__header');
  post.appendChild(postHeader);

  const postMeta = document.createElement('div');
  postMeta.classList.add('post-meta');
  postHeader.appendChild(postMeta);

  const postMetaIcon = document.createElement('div');
  postMetaIcon.classList.add('post-meta__icon');
  postMeta.appendChild(postMetaIcon);

  if (postData.author.image !== '') {
    const profilePic = document.createElement('img');
    profilePic.classList.add('profile-pic');
    profilePic.alt = postData.author.name;
    profilePic.src = postData.author.image;

    postMetaIcon.appendChild(profilePic);
  } else {
    const names = postData.author.name.split(' ');
    const monogram = names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase();

    const profilePicDefault = document.createElement('h2');
    profilePicDefault.classList.add('profile-pic-default');
    profilePicDefault.innerText = monogram;

    postMetaIcon.appendChild(profilePicDefault);
  }

  const postMetaData = document.createElement('div');
  postMetaData.classList.add('post-meta__data');
  postMeta.appendChild(postMetaData);

  const postMetaAuthor = document.createElement('div');
  postMetaAuthor.classList.add('post-meta__author');
  postMetaAuthor.innerText = postData.author.name;
  postMetaData.appendChild(postMetaAuthor);

  const postMetaTime = document.createElement('div');
  postMetaTime.classList.add('post-meta__time');
  postMetaTime.innerText = new Date(postData.created).toLocaleDateString();
  postMetaData.appendChild(postMetaTime);

  const postText = document.createElement('div');
  postText.classList.add('post__text');
  postText.innerText = postData.content;
  post.appendChild(postText);

  const postImage = document.createElement('div');
  postImage.classList.add('post__image');
  post.appendChild(postImage);

  const postImageImg = document.createElement('img');
  postImageImg.src = postData.media;
  postImage.appendChild(postImageImg);

  const postFooter = document.createElement('div');
  postFooter.classList.add('post__footer');
  post.appendChild(postFooter);

  const likes = document.createElement('div');
  likes.classList.add('likes', 'js-likes');
  postFooter.appendChild(likes);

  const likesCta = document.createElement('div');
  likesCta.classList.add('likes__cta');
  likes.appendChild(likesCta);

  const likeButton = document.createElement('a');
  likeButton.classList.add('like-button', 'js-like-button');
  //likeButton.href = '#';
  likeButton['data-postid'] = postData.id;
  likeButton.innerHTML = `<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>`;
  likesCta.appendChild(likeButton);

  const likesCounter = document.createElement('div');
  likesCounter.classList.add('likes__counter');
  likesCounter.innerHTML = ` Piace a <b id="like-counter-${postData.id}" class="js-likes-counter">${postData.likes}</b> persone`;
  likes.appendChild(likesCounter);

  return post;
}

posts.forEach((post) => {
  container.appendChild(createPost(post));
});

document.querySelectorAll('.js-like-button').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('like-button--liked');

    const id = event.currentTarget['data-postid'];
    const likesPlace = document.getElementById('like-counter-' + id);
    const likes = parseInt(likesPlace.innerHTML);
    const newLike = event.currentTarget.classList.contains('like-button--liked')
      ? likes + 1
      : likes - 1;

    likesPlace.innerHTML = newLike;
  });
});
