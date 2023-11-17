export async function get (req) {
  return {
    json: {
      books: [
        {
          author: 'One',
          title: 'Two',
          isbn: 'Three',
          read: true,
        },
        {
          author: 'Four',
          title: 'Five',
          isbn: 'Six',
          read: true,
        },
        {
          author: 'Seven',
          title: 'Eight',
          isbn: 'Three',
          read: false,
        },
        {
          author: 'Nine',
          title: 'Ten',
          isbn: 'Eleven',
          read: false,
        },
      ]
    }
  }
}
