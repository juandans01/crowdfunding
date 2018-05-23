import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #f9faf5;
`

export const Picture = styled.img`
  border: 1px solid #ececec;
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
`

export const Description = styled.div`
  background: white;
  margin-top: 2px;
  padding: 10px;
  border: 1px solid #ececec;
  font-family: ${props => props.theme.font};
`

export const Content = styled.div`
  margin: 0 20px;
  padding: 20px;
`
export const Raised = styled.div`
  margin-left: 10px;
  margin-top: 50px;
  padding: 10px;
  height: 150px;
  background: white;
  border: 1px solid #ececec;
  border-radius: 2px;
  @media (max-width: 767px) {
    margin: 10px 0;  
  }
`

export const FundedBar = styled.div`
  position: relative;
  margin: 10px 0;
  background: #acacac;
  margin: 10px 0;
  border-radius: 5px;
  height: 5px;
  width: 100%;
`
export const FundedProgress = styled.div`  
  background: ${props => props.theme.applicationColor};
  width: ${props => props.progress}%;
  height: 5px;
  border-radius: 5px;
`

export const Cost = styled.div`
  font-size: 26px;
  font-family: ${props => props.theme.font};

  > span {
    font-size: 20px;
  }
`

export const DonateButton = styled.div`
  cursor: pointer;
  border-radius: 2px;
  margin-top: 30px;
  background: white;
  border: 3px solid ${props => props.theme.applicationColor};
  color: ${props => props.theme.applicationColor};
  text-align: center;
  padding: 10px;
`

export const Donors = styled.div`
  margin: 10px 0 0 10px;
  padding: 10px;
  background: white;
  border: 1px solid #ececec;
  border-radius: 2px;
  @media (max-width: 767px) {
    margin: 10px 0;  
  }
`

export const Donor = styled.div`
  padding: 5px;
  > img {
    border-radius: 50%;
  }

  > div {
    padding: 10px;
    display: inline-block;

    > span {
      color: ${props => props.theme.applicationColor};
    }
    
  }
`

export const Title = styled.div`
  font-size: 26px;
  font-family: ${props => props.theme.font};
  padding: 10px 0;
`