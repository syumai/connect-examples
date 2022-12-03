interface CardProps {
  message?: string;
}

export const Card = ({message}: CardProps) => <div className="block">
  <div className="card">
    <div className="card-content">{message ?? "loading..."}</div>
  </div>
</div>

