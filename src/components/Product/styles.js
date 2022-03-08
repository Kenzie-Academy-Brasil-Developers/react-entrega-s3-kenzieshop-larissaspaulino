import styled, {keyframes} from 'styled-components'

const appearFromLeft = keyframes`
    from {
        width: 310px;
    }

    to {
        width: 300px;
    }
`

export const Container = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 300px;
margin: 20px;
padding: 25px;
background-color: #FFF;
text-align: center;
border-radius: 8px;
/* transition: 0.3s; */

    :hover {
     /*    filter: brightness(0.9); */
/*      animation: ${appearFromLeft} 0.5s;
 */    }

    > img {
        width: 100%;
        height: 300px;
        object-fit: contain;
    }

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 20px;
    }

     h4 {
        color: var(--grey);
    }
`