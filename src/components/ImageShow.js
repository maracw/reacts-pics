function ImageShow ({image}) {
    return (
        <div>
            <img src={image.urls.small} 
            alt = {image.alt_description}/>
            <p>{image.alt_description}</p>
        </div>
    );
}

export default ImageShow;