import React, { useState } from 'react'
import List2 from './List2';
import List3 from './List3';

function List1() {
    const buttonHandler = (val) => {
        setSaveImg(val)
    };
    const deleteImageHandler=()=>{
        setSaveImg(['', ''])
    }
 
 const altText = ['image1', 'image2']
    const [imgSrc1, setimgSrc1] = useState("Assets/noimage.jpg");
    const [imgSrc2, setimgSrc2] = useState("Assets/noimage.jpg")
    const [saveImg, setSaveImg] = useState(['', ''])
    const images = [   
        {
            id: 1,
            img: "Assets/img1.jpg"
        },
        {
            id: 2,
            img: 'Assets/img2.jpg'
        },
        {
            id: 3,
            img: 'Assets/img3.jpg'
        },
        {
            id: 4,
            img: 'Assets/img4.jpg'
        },

    ];
    const images2 = [{
        id: 1,
        img: "Assets/img7.jpg"
    },
    {
        id: 2,
        img: 'Assets/img8.jpg'
    }];

    const getImgSrc1 = (e) => {
        setimgSrc1(e.target.attributes[0].nodeValue);
        console.log(' event object 1', e)
        console.log('source value 1', imgSrc1)
    }

    const getImgSrc2 = (e) => {
        setimgSrc2(e.target.attributes[0].nodeValue);
        console.log(' event object 2', e)
        console.log('source value 2', e.target.attributes[0].nodeValue)
    }
    return (
        <div>
            <h3>Third Task</h3>
          
            <div className='row'>
            <div className='images'>
                <div className='col-6 border-style'>
                    {
                        // eslint-disable-next-line jsx-a11y/img-redundant-alt
                        images.map(data1 => (<img key={data1.id} src={data1.img} alt="no image" onClick={(event) => getImgSrc1(event)} />))}
</div>
                </div>
                <div className='images1'>
                <div className='col-6 border-style'>
                  
                    {
                        // eslint-disable-next-line jsx-a11y/img-redundant-alt
                        images2.map(data2 => (<img src={data2.img} alt="no image" onClick={(event) => getImgSrc2(event)} />))
                    }
                    </div>
                </div>
            </div>
            <List2 imgSrc1={imgSrc1} imgSrc2={imgSrc2} altText={[...altText]} buttonHandler={buttonHandler} />

            <div className='row'>
                <List3 imgData={[...saveImg]} altText={[...altText]} deleteImageHandler={deleteImageHandler} />
            </div>
        </div>


    )
}

export default List1