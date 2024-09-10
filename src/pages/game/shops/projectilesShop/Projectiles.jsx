import React, { useState } from "react";

export default function Items({ itemImg, itemName, damage, price, projectileSelection, buyStatus }) {

    const [isHovering, setIsHovering] = useState(false)
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const handleMouseMove = (e) => {
        setPosition({ top: e.clientY, left: e.clientX });
      };

    return (
        <div onClick={projectileSelection} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onMouseMove={handleMouseMove}>
            <img className={buyStatus} src={itemImg} alt="" />
            {isHovering && <div className="details" style={{
                 position: 'absolute',
                 top: position.top - 225,
                 left: position.left - 340,
                 pointerEvents: 'none',
                 zIndex: 10
            }}>
                <h3>{itemName}</h3>
                <p><b>Projectile Attack: </b>{damage}</p>
                <p><b>Price: </b>{price}</p>
            </div>}
        </div>
    )
}