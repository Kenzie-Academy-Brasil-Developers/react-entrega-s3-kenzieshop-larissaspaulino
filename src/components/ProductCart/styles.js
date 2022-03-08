import styled from 'styled-components'

export const Container = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    max-width: 600px;
    background-color: #fff;
    margin: 10px;
    padding: 10px 15px;
    border-radius: 6px;

    h3 {
        max-width: 300px;
        font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }



    > img {
        
        width: 100px;
        height: 100%;
        object-fit: contain;
    }


/* transition: 0.3s; */


`
export const Quantity = styled.div`
    min-width: 100px;
`
