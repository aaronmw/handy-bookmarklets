# `auto-populate-form`

1. Tweak code
2. Copy code
3. Go here and paste: <a href="https://mrcoles.com/bookmarklet/" target="_blank">Generate Bookmarklet Here</a>

# `log-page-metadata-to-console`

1. Drag this to your bookmarks bar: <a href="javascript:(function()%7Bconsole.log(JSON.stringify(Object.fromEntries(Array.from(document.querySelectorAll('title%2C%20meta%5Bproperty%3D%22og%3Atitle%22%5D%2C%20meta%5Bname%3D%22description%22%5D%2C%20meta%5Bname%3D%22keywords%22%5D'%2C)%2C).map((node)%20%3D%3E%20%7Breturn%20node.tagName.toLowerCase()%20%3D%3D%3D%20'title'%3F%20%5B'title'%2C%20node.textContent%5D%3A%20%5Bnode.getAttribute('property')%20%3F%3Fnode.getAttribute('name')%20%3F%3F'No%20name%20nor%20property%20attribute'%2Cnode.getAttribute('content')%20%3F%3F%20'No%20content'%2C%5D%7D)%2C)%2Cnull%2C4%2C)%2C)%7D)()">Log Metadata</a>
2. Open the console
3. Click button
