export default function Category({ title, foods }) {
  return (
    <div>
      <h2 style={{ marginTop: '2.5rem' }}>{title}</h2>
      <p>{foods}</p>
    </div>
  );
}
