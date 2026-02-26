import Card from "./Card"

export default function List({ products }) {
  return(
    <div style={{
      display: "flex",
      width: "98%",
      flexWrap: "wrap",
      gap: "20px",
      padding: "16px",
      justifyContent:"center"
      
    }}>
      {/* Result section - simple and clean */}
      <div style={{
        width: "100%",
        marginBottom: "16px"
      }}>
        <p style={{
          margin: "0",
          fontSize: "14px",
          color: "#666",
          fontFamily: "Arial, sans-serif"
        }}>
          Showing {products.length} {products.length === 1 ? 'item' : 'items'}
        </p>
      </div>
      
      {/* Products list or no items message */}
      {products.length === 0 ? (
        <div style={{
          width: "100%",
          textAlign: "center",
          padding: "40px 20px",
          margin: "20px 0"
        }}>
          <p style={{
            fontSize: "16px",
            color: "#999",
            margin: "0",
            fontFamily: "Arial, sans-serif"
          }}>
            No items to display
          </p>
        </div>
      ) : (
        products.map(product => (
          <Card key={product.id} products={product}/>
        ))
      )}
    </div>
  )
}