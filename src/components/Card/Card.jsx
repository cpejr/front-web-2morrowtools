import { StyledCard, BlueButton, Line, Tags, Tag, Image, Stars, LineSVG, Group } from "./Styles";
import { FaRegBookmark } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Card({ dados }) {
  const groupedTags = [];

  for (let i = 0; i < dados.tags.length; i += 2) {
    groupedTags.push(dados.tags.slice(i, i + 2));
  }
  return (
    <StyledCard>
      <Image>
        <img src={dados?.image} />
      </Image>
      <Group>
        <Line>{dados?.name}:</Line>
        <LineSVG>
          <FaRegBookmark />
        </LineSVG>
      </Group>

      <Line>
        <Stars disabled defaultValue={dados?.stars} />
        <span>({dados?.stars})</span>
      </Line>
      <Line>
        <p>{dados?.description}</p>
      </Line>
      {groupedTags.map((tags) => (
        <Tags key={tags}>
          {tags.map((content) => (
            <Tag key={content}>{content}</Tag>
          ))}
        </Tags>
      ))}
      <BlueButton type='primary'>BOTÃO</BlueButton>
    </StyledCard>
  );
}
Card.propTypes = {
  dados: PropTypes.object.isRequired,
};
