const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}
export async function getPSinglePost(name: string , categoryName: string) {
  const data = await fetchAPI(
    `
    query GlobalPropTech($categoryName: String!, $name: String!) {
      posts(where: {categoryName: $categoryName, name: $name}) {
        edges {
          node {
            title
            excerpt
            slug
            date
            modified
            content
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }`,
    {
      variables: { name,categoryName },
    }
  )
  return data?.posts
}
export async function getListCategory(categoryName: string, endCursor ='', typeofPost: string) {

  let query;
  if (typeofPost.localeCompare('nextPosts') === 0) {
    query = `
      query CategoryTech($categoryName: String!, $endCursor: String!) {
       posts(after: $endCursor, first: 10, where: { categoryName: $categoryName, orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              slug
              date
              modified
              content
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
              categories {
                edges {
                  node {
                    name
                    slug
                    description
                  }
                }
              }
              author {
                node {
                  name
                  firstName
                  lastName
                  avatar {
                    url
                  }
                }
              }
            }
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    `;
  } else if (typeofPost.localeCompare('previousPosts') === 0) {
    query = `
      query CategoryTech($categoryName: String!, $endCursor: String!) {
        posts(before: $endCursor, last: 10, where: { categoryName: $categoryName, orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              slug
              date
              modified
              content
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
              categories {
                edges {
                  node {
                    name
                    slug
                    description
                  }
                }
              }
              author {
                node {
                  name
                  firstName
                  lastName
                  avatar {
                    url
                  }
                }
              }
            }
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    `;
  }

  const data = await fetchAPI(query,
    {
      variables: {categoryName, endCursor },
    }
  )
  return data?.posts
}

export async function getAboutPage( page : string){
  const data = await fetchAPI(`query Page ($page : String!) {
    pageBy(uri: $page) {
      content
    }
  }`,
  {
    variables : {
      page,
    }
  }
 )
  return data?.pageBy
}

export async function getPreviewCategorySlug() {
  const data = await fetchAPI(
    `
    {
      posts {
        edges {
          node {
            title
            slug
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            categories {
              edges {
                node {
                  id
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
    `
  );
  return data?.posts;
}
export async function getSlugData() {
  const data = await fetchAPI(
    `
    {
      categories {
        nodes {
          id
          name
          slug
        }
      }
    }
    `
  );
  return data?.categories;
}



export async function getCategory() {
  const data = await fetchAPI(`
  query category {
    categories(first: 6, where: {orderby: COUNT, order: DESC}) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
  `)
  return data?.categories
}

export async function getAllPostsForHome(categoryName : string) {
  const data = await fetchAPI(
    `
    query CategoryTech($categoryName: String!) {
      posts(last: 10, where: { categoryName: $categoryName, orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                  description
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        categoryName
      },
    }
  )

  return data?.posts
}

export async function getRecentModification(preview) {
  const data = await fetchAPI(
    `
    query RecentlyModified {
      posts(first: 20, where: {orderby: {field: MODIFIED, order: DESC}}) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            tags {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}

export async function getFeaturedPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query PreviewPost {
      posts(
        where: {tag: "Featured", orderby: {order: DESC, field: MODIFIED}}
        first: 3
      ) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}
export async function getGlobalNews(preview) {
  const data = await fetchAPI(
    `
    query GlobalPropTech {
      posts(
        first: 3
        where: {orderby: {field: DATE, order: DESC}, categoryName: "global-proptech-news"}
      ) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}
//Optimized For Production
export async function getEditorChoice(preview) {
  const data = await fetchAPI(
    `
    query EditorsChoice {
      posts(
        where: {tag: "Editors-Choice", orderby: {field: DATE, order: DESC}}
        first: 1
      ) {
        edges {
          node {
            title
            slug
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}



//Optimized For Prodution
export async function getUrl() {
  const data = await fetchAPI(`
  {
    posts(first: 100) {
      edges {
        node {
          slug
          id
          title
          slug
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
  `)
  return data?.posts
}
