interface Props {
    params : {id: number, photoId : number}
}

const PhotosDetails = ({params: {id ,photoId}}: Props) => {
  return (
    <div>
      PhotosDetails {id} {photoId}
    </div>
  );
}

export default PhotosDetails