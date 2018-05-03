import styled from 'styled-components'

// export const Form = styled.form`
//   display: grid;
//   grid-template-columns: 10fr 2fr 1fr;
//   padding: 3px;
//   justify-content: center;
//   box-sizing: border-box;
// `
export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 250px));
  grid-gap: 12px;
  justify-content: center;
  font-family: 'Anton', sans-serif;
`
export const CardRow = styled.div`
  filter: ${props => props.blur === 'previewUrl' ?
'blur(3px)': null};
background-color: #ffffff;
&:hover {
  cursor: pointer;
}
`
export const Figure = styled.figure`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ImageContainer = styled.div`
  position: relative;
`
export const Icon = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: black;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: .2s;
  &:hover {
    transform: scale(1.2);
  }
`
export const IconContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  text-align: center;
`
export const LoadingContainer = styled.div`
  height: 120vh;
  display: grid;
  width: 85%;
  margin: auto;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 250px));
  grid-template-rows: repeat(auto-fill, minmax(220px, 250px));
  justify-content: center;
`
export const LoadingCardContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
  margin-top: 15px;
`
export const LoadingImage = styled.div`
  background-color: rgb(233,235,238);
  width: 50%;
  height: 50%;
  border-radius: 50%;
  text-align: center;
  margin: auto;
  margin-bottom: 16px;
  margin-top: 10px;
  box-sizing: border-box;
  animation-name: loadingtwo;
  animation-duration: .7s;
  animation-iteration-count: infinite;
  @keyframes loadingtwo {
    0% {
      background: rgb(210,222,225);
    }
    100% {
      background:  rgb(233,235,238);
    }
  }
`
export const LoadingBar = styled.div`
  background-color: rgb(233,235,238);
  width: 80%;
  height: 8%;
  border-radius: 20px;
  text-align: center;
  margin: auto;
  margin-bottom: 10px;
  box-sizing: border-box;
  animation-name: loading;
  animation-duration: .7s;
  animation-iteration-count: infinite;
  @keyframes loading {
    0% {
      background: rgb(210,222,225);
    }
    100% {
      background:  rgb(233,235,238);
    }
  }
`
