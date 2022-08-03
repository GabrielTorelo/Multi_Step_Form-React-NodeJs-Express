import styled from "styled-components"
import SocialMedia from "./SocialMedia"

const ProfileContent = (props: any) => {
	return (
		<Container>
			<h1>Resumo</h1>
			<p>
				Lorem ipsum dolor sit amet. Et quod impedit At quia quibusdam id autem
				amet et fugit dignissimos. Eum repellat officiis quo rerum quia sed
				officiis accusantium est nostrum ipsa sit tenetur repudiandae. Nam
				repudiandae earum est voluptatibus reiciendis ut officia quam sit illo
				doloremque et provident molestiae qui modi consequuntur rem deserunt
				consequuntur. Quo soluta et placeat voluptas et quam alias vel incidunt
				quia et omnis laudantium? Et accusamus mollitia et dolorem obcaecati vel
				nostrum fugit aut rerum ipsam est placeat et deleniti atque.{" "}
			</p>
			<Social>
				<SocialMedia />
			</Social>
		</Container>
	)
}

const Container = styled.div`
	display: inherit;
	width: 100%;
	height: 100%;
	flex-direction: row;
	border-radius: inherit;
	background-color: rgb(35, 52, 60);
	margin-top: -10vh;
	color: white;
	font-family: inherit;

	@media (max-width: 768px) {
		align-items: center;
		flex-direction: column;
		border-top-left-radius: 40px;
		border-top-right-radius: 40px;
	}

	& > h1 {
		margin: 0;
		align-self: center;
		padding-left: 5vh;

		@media (max-width: 768px) {
			padding: 5vh;
		}
	}

	& > p {
		margin: 0;
		padding: 5vh;
		text-align: justify;

		@media (max-width: 768px) {
			padding: 0 5vh 5vh;
		}
	}
`

const Social = styled.div`
    display: inherit;
    width: 100%;
    margin-bottom: 5vh;

    @media (min-width: 768px) {
        display: none;
    }
`

export default ProfileContent
