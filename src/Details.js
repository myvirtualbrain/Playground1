import './Details.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


const Details = (props) => {
    let history = useHistory();

    function handleClick() {
        history.goBack();
    }

    let [urls, setUrls] = useState([]);
    
    //multi fetch
    //https://stackoverflow.com/questions/49754270/multiple-fetch-requests-with-setstate-in-react
    useEffect(() => {
        
        //Att fetcha en bara:
        // fetch(`https://dog.ceo/api/breed/${props.match.params.id}/images/random`)
        //     .then((res) => res.json())
        //     .then((result) => {
        //         let url = result.message;
        //         setUrls(url);
        //     });

        //Att hämta alla på en gång + vänta tills ALLA har hämtats sen körs "then"
        Promise.all([
            fetch(`https://dog.ceo/api/breed/${props.match.params.id}/images/random`),
            fetch(`https://dog.ceo/api/breed/${props.match.params.id}/images/random`),
            fetch(`https://dog.ceo/api/breed/${props.match.params.id}/images/random`),
            fetch(`https://dog.ceo/api/breed/${props.match.params.id}/images/random`),
            fetch(`https://dog.ceo/api/breed/${props.match.params.id}/images/random`),
        ])
        .then(([res1, res2, res3, res4, res5]) => Promise.all([res1.json(), res2.json(),res3.json(), res4.json(), res5.json()]))
        .then(([data1, data2, data3, data4, data5]) =>{
            let urlList = [data1.message, data2.message, data3.message, data4.message, data5.message];
            setUrls(urlList);
        });

    }, []);

    return (
        <div>
            <h1>Show 5 random {props.match.params.id} images</h1>

            {
                urls.map((url, index) => {
                    return <img key={index} src={url} />
                })

            }

            <button type="button" onClick={handleClick}>Go back</button>
        </div>
    );

};

export default Details;