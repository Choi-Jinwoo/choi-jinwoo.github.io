import fs from 'fs';
import path from 'path';

const POST_ROOT_PATH = path.resolve(__dirname, '../blog');

const extractPostRSSData = async (postPath: string) => {
  try {
    const file = await fs.readFileSync(
      `${POST_ROOT_PATH}/${postPath}/index.mdx`
    );

    const frontmatter = file.toString().split('---')[1];
    const title = RegExp(/(?<=(title: )).+/).exec(frontmatter)![0];
    const date = RegExp(/(?<=(date: )).+/).exec(frontmatter)![0];

    return {
      title: title.replace(/(^'|'$)/gi, ''),
      date: date.replace(/(^'|'$)/gi, ''),
      postPath,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const run = async () => {
  const categoryDirNames = fs.readdirSync(POST_ROOT_PATH);

  let postPaths: string[] = [];
  await Promise.all(
    categoryDirNames.map(
      categoryDirName =>
        new Promise<void>((resolve, reject) => {
          fs.readdir(`${POST_ROOT_PATH}/${categoryDirName}`, (error, files) => {
            if (error) return reject();

            postPaths = [
              ...postPaths,
              ...files.map(file => `${categoryDirName}/${file}`),
            ];

            resolve();
          });
        })
    )
  );

  const postMetadataList = await Promise.all(postPaths.map(extractPostRSSData));

  const items = postMetadataList.map(({ title, date, postPath }) => {
    return `
      <item>
        <title>
          <![CDATA[ ${title} ]]>
        </title>
        <link>https://choi-jinwoo.github.io/post/${postPath}</link>
        <guid isPermaLink="false">https://choi-jinwoo.github.io/post/${postPath}</guid>
        <pubDate>${new Date(date).toUTCString()}</pubDate>
      </item>
    `;
  });

  const rss = `
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>
          <![CDATA[ 꼬꼬마 블로그 RSS ]]>
        </title>
        <description>
          <![CDATA[ 꼬꼬마의 기술 블로그 ]]>
        </description>
        <link>https://choi-jinwoo.github.io</link>
        <generator>GatsbyJS</generator>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items.join('')}
      </channel>
    </rss>
  `;

  fs.writeFileSync(path.resolve(__dirname, '../public/feed.xml'), rss);
};

run();
