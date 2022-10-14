import * as S from './styles';

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps): JSX.Element => {
  return (
    <S.Container id={`page-title-${title}`}>
      <S.Marked />
      {title}
    </S.Container>
  );
};

export default PageTitle;
