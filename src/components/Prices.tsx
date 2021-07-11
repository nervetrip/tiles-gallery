export default function Prices() {
  const row = (range: string, price: number) => (
    <div
      style={{
        width: 300,
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 10,
      }}
    >
      <span>{range}</span>
      <span>{price} ETH</span>
    </div>
  )

  return (
    <div>
      <div
        style={{
          margin: '0 auto',
          marginTop: '20vh',
          paddingBottom: 80,
        }}
      >
        <div style={{ maxWidth: 300, margin: '0 auto' }}>
          <p style={{ textAlign: 'center' }}>Tile pricing</p>
          <div>{row('1 - 200', 0.01)}</div>
          <div>{row('201 - 400', 0.02)}</div>
          <div>{row('401 - 800', 0.04)}</div>
          <div>{row('801 - 1,600', 0.08)}</div>
          <div>{row('1,601 - 3,200', 0.16)}</div>
          <div>{row('3,201 - 6,400', 0.32)}</div>
          <div>{row('6,401 - 12,800', 0.64)}</div>
          <div>{row('12,801 +', 1.28)}</div>
        </div>
      </div>
    </div>
  )
}
