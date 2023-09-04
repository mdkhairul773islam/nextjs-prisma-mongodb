function BlogPostNavigation({ postId, allPosts }) {
  const currentIndex = allPosts.findIndex((post) => post.id === postId);

  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div>
      {prevPost && (
        <Link href={`/blog/${prevPost.slug}`}>
          <a>Previous: {prevPost.title}</a>
        </Link>
      )}

      {nextPost && (
        <Link href={`/blog/${nextPost.slug}`}>
          <a>Next: {nextPost.title}</a>
        </Link>
      )}
    </div>
  );
}

export default BlogPostNavigation;
