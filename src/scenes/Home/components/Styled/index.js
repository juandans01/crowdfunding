import styled from 'styled-components'

export const FeatureWrapper = styled.div`
  margin: 30px;
`

export const Card = styled.div`
  transition: box-shadow .2s;
  border: 1px solid #b2b2b2;
  border-radius: 2px;
  color: #282828;
  cursor: pointer;
  margin: 20px;
  box-shadow: 0 0 5px rgba(33,33,33,.1);
  :hover {
    color: ${props => props.theme.applicationColor}
    box-shadow: 0 0 11px rgba(33,33,33,.3); 
  }
`

export const FeaturePicture = styled.div`
  height: 300px;
  background-image: url(${props => props.picture});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Info = styled.div`
  padding: 10px;
  font-family: ${props => props.theme.font};
`

export const Funded = styled.div`
  color: #a9a9a9;
  font-size: 16px;
`

export const Description = styled.div`
  color: #282828;
  padding: 20px 0;
`

export const Title = styled.div`
  margin: 20px;
  font-size: 26px;
  font-family: ${props => props.theme.font};
`

export const Divider = styled.div`
  width: 100%;
  border: 0.5px solid #a9a9a9; 
`

export const Picture = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${props => props.picture});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Wrapper = styled.div`
  background-color: #f9faf5;
`

export const CardTitle = styled.div`
  font-size: 20px;
  margin: 5px 0;
  font-family: ${props => props.theme.font};
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

export const Welcome = styled.div`
  margin: 30px;
  > img {
    width: 250px;
    height: 250px;
  }

  > div {
    display: inline-block;
    font-size: 26px;
    font-family: ${props => props.theme.font};
    font-size: 70px;
    margin: 10px 40px;
  }
`