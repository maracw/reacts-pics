import ImageShow from "./ImageShow";

function ImageList ({ images }) {
    //create array of react components
    const renderedImages = images.map ((image) => {
        return <ImageShow image={image} />;
    });

    return (
        <div>{renderedImages}</div>
    );
}

export default ImageList;