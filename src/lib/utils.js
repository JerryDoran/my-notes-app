export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
  });
}

export function formatPosts(
  posts,
  { sortByDate = true, limit = undefined } = {}
) {
  // sort by date or randomize the posts
  if (sortByDate) {
    posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  } else {
    posts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed in
  if (typeof limit === 'number') {
    return posts.slice(0, limit);
  }

  return posts;
}
