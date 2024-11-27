import image from '../../../assets/sailor.jpg'
import Button from '../card/Button'

export default function Card() {

    return (
        <div className="card">
            <div className='card-image'>
                <img className="img" src={image} alt="" />
            </div>
            <div className='card-body'>
                <h3>Sailor Moon</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, saepe.</p>
                <Button />
            </div>
        </div>

    )
}