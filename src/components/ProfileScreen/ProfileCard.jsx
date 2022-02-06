export default function ProfileCard(props) {

    const {name} = props;

    return (
        <div class="card d-flex flex-column align-items-center m-2">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Ski_trail_rating_symbol_black_circle.png" class="card-img-top" alt="..." style={{width: "50px" }} />
    <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">Student</p>
    </div>
</div>
    )
}