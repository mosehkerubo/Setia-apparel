export const getStaticPaths = async () => {
  const res = await fetch(
    "https://floating-badlands-09507.herokuapp.com/api/product"
  );
  const data = await res.json();
  const paths = data.map((item) => {
    return {
      params: { id:item._id.toString() }
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://floating-badlands-09507.herokuapp.com/api/product/find/" + id
  );
  const data = await res.json();

  return {
    props: { item: data },
  };
};




const Products1 = ({ item }) => {
  console.log(item);
  return (
    <div>
        <h1>cgfctfv7bt</h1>
      <img src={item.image} />
      <h1>{item.productname}</h1>
    </div>
  );
};

export default Products1;





