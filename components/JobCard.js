// import Image from 'next/image';

export default function JobCard({ job }) {
    return (
        <section className="card">
            {/* <Image src={`/images/${job.language}.png`} width="200" height="200" /> */}
            <div className="container">
                <h2>{job.nombre}</h2>
                <p>{job.descripcion}</p>
            </div>
        </section>
    )
}
