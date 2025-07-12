import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Album = () => {

  const {albumId} = useParams();

  useEffect(()=>{
    // console.log("Component rendered here")
  },[])
  return (
    <div className='album' style={{ width: "100%", padding: "1rem" }}>
      <div className="album-details" style={{ display: 'flex', gap: '1.5rem' }}>
        <div className="left">
          <img
            src="https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg"
            alt="album-img"
            style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div className="right">
          <h2>{albumId}</h2>
          <h4>Lo-fi vibes for focus & relaxation</h4>
          <div className="action" style={{ marginTop: "1rem" }}>
            <button style={{ marginRight: "0.5rem" }}>Play</button>
            <button>Like</button>
          </div>
        </div>
      </div>

      <hr style={{ margin: "1.5rem 0" }} />

      <div className="album-track" style={{ padding: "1rem 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>
              <th>#</th>
              <th>Title</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { title: "Intro Vibes", duration: "1:23" },
              { title: "City Lights", duration: "3:45" },
              { title: "Midnight Ride", duration: "4:05" },
              { title: "Echoes", duration: "2:58" },
            ].map((track, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                <td>{index + 1}</td>
                <td>{track.title}</td>
                <td>{track.duration}</td>
                <td>
                  <button style={{ marginRight: "0.5rem" }}>▶</button>
                  <button>♡</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Album;
