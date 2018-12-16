export class TradeSetup {
  constructor(
    public Ticker: string,
    public Date: any,
    public LongTrend?: string,
    public LongTrendChart?: any,
    public MiddleTrend?: string,
    public MiddleTrendChart?: any,
    public ShortTrend?: string,
    public ShortTrendChart?: any,
    public FundamentalText?: string,
    public NearestFundamentalEventDate?: Date,
    public NearestFundamentalEventName?: string,
    public id?: string,
  ) {
  }
}
