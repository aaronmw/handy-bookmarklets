console.log(
  JSON.stringify(
    Object.fromEntries(
      Array.from(
        document.querySelectorAll(
          'title, meta[property="og:title"], meta[name="description"], meta[name="keywords"]',
        ),
      ).map((node) => {
        return node.tagName.toLowerCase() === 'title'
          ? ['title', node.textContent]
          : [
              node.getAttribute('property') ??
                node.getAttribute('name') ??
                'No name nor property attribute',
              node.getAttribute('content') ?? 'No content',
            ]
      }),
    ),
    null,
    4,
  ),
)
