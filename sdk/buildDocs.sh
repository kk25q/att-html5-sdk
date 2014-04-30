mkdir -p ../packaged.docs/docs/resources
jsduck \
  client/att-api-client.js\
  -o ../packaged.docs/docs \
  --eg-iframe=doc_src/inline-eg.html \
  --guides=doc_src/guides.json \
  --categories=doc_src/class-categories.json \
  --images=doc_src/resources/images \
  --title="AT&T API Platform SDK for HTML5" \
  --warnings=+all,-image_unused,-link_auto \
  --welcome=doc_src/welcome.html \
  --head-html='<link rel="stylesheet" href="resources/css/styles.css" type="text/css">' \
  --meta-tags=doc_src/custom-tags/beta.rb

#copy the images to output dir (maybe JSDuck can do this automatically?)
cp -R doc_src/resources/* ../packaged.docs/docs/resources/
