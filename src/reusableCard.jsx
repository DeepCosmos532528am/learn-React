
function Card({ images }) {

    return (
        <div style={{
            width: "300px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#fff",
            textAlign: 'center',
            borderRadius: "30px 30px 10px 10px",
            flex: "1 0 200px"
        }}>
            <img style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "30px"
            }} src={images.iurl} alt="" />
            <span >{images.userName}</span>
            <div style={{ padding: "16px" }}>
                <h3 style={{ margin: "0 0 8px", fontSize: "18px", color: "#333" }}>
                    {images.iname}
                </h3>
                <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
                    {images.idesc}
                </p>
            </div>
        </div>
    )
}

export default Card;