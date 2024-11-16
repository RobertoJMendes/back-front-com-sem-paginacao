import styled from "styled-components";
import Ttl from "./Title";

    const Container = styled.div`
        width:100%;
        max-width: 800px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    `
function CtnrTitle (){
    return(
        <Container>
            <Ttl />
        </Container>
    )
}
export default CtnrTitle
