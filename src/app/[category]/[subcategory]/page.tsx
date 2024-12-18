interface PageProps{
  params: {
    category: string
  }
}

const SubCategoryPage = ({params}: PageProps) => {
  return (
    <h1>SUBCATEGORY</h1>
  )
}

export default SubCategoryPage;
