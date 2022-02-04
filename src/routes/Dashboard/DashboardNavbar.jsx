export default function DashboardNavbar(props) {

    const { info } = props;

    const studentName = info["name"].split(" ")[1];

    return (
        <nav class="navbar navbar-light sticky-top bg-light my-0">
        <div class="container-fluid d-flex flex-column">
            <div class="container-fluid d-flex justify-content-between my-2">
                <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                    </svg></a>

                <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg></a>
            </div>

            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Good Afternoon {studentName}</span>
                <small class="text-muted">GPA Hidden</small>
            </div>
          
        </div>
      </nav> 
    )
}