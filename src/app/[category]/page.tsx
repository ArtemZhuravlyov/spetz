interface PageProps{
  params: {
    category: string
  }
}

const CategoryPage = ({params}: PageProps) => {
  return (
    <h1>CATEGORY</h1>
  )
}

 export default CategoryPage;
