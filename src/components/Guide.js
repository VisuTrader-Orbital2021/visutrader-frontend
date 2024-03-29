import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/slices/user";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import { MathComponent } from "mathjax-react";
import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  topic: {
    marginTop: "70px",
  },
  subtopic: {
    marginTop: "50px",
  },
  subsubtopic: {
    marginTop: "30px",
  },
  paragraph: {
    marginTop: "20px",
  },
  tableOfContents: {
    marginTop: "80px",
  },
  list: {
    listStyle: "none",
  },
  navigationText: {
    textDecoration: "none",
    color: theme.palette.type === "light" ? "black" : "white",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
    "&:active": {
      color: theme.palette.secondary.main,
    },
  },
  linkText: {
    textDecoration: "underline",
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.primary.light,
    },
    "&:active": {
      color: theme.palette.secondary.light,
    },
  },
}));

export default function Guide() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const user = useSelector(userSelector);

  if (user.authenticated) {
    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={10}>
            <Grid item xs={9}>
              <div>
                <article>
                  <section>
                    <Typography variant="h1">Preface</Typography>

                    <Typography className={classes.paragraph} variant="body1">
                      This guide is by no means complete. Lots of websites
                      already provide a ton more information than we ever could
                      here. With that said, plenty of prerequisites and prior
                      knowledges are required before one could read the myriad
                      of resources scattered on the internet. Therefore, the
                      intention of this guide is not to be a complete resources
                      that covers every details. Instead, this guide will
                      provide a very brief, easy-to-understand introduction to
                      stock trading and investment. The information provided
                      here is inspired, referenced, and taken from many other
                      websites in an attempt to put together a short compilation
                      of essential information for beginners. Any suggestions
                      are very much welcome. Happy reading!
                    </Typography>

                    <Typography className={classes.paragraph} variant="body1">
                      P.S. If you&apos;re already familiar with stock trading or
                      you just want to use the website right away, you can skip
                      to{" "}
                      <a
                        className={classes.linkText}
                        href="#paper_trading_with_visutrader"
                      >
                        Part 3
                      </a>{" "}
                      to learn how to use VisuTrader.
                    </Typography>
                  </section>

                  <section>
                    {/* Empty padding */}
                    <Typography id="before_you_begin">‎</Typography>

                    <Typography className={classes.topic} variant="h1">
                      Part 1 Before You Begin
                    </Typography>

                    <section>
                      {/* Empty padding */}
                      <Typography id="why_should_I_consider_investing">
                        ‎
                      </Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        Why should I consider investing?
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        Before diving too deep into the discussion of stocks or
                        trading, first we have to understand the motivation
                        behind it. Think about what happen to your money when
                        you store it. By default, your money loses it value over
                        time. This is caused by something called inflation, a
                        situation where the purchasing power of your currency
                        decreases and the prices of goods increase. For a more
                        detailed explanation, visit{" "}
                        <a
                          className={classes.linkText}
                          href="https://www.investopedia.com/terms/i/inflation.asp"
                        >
                          here
                        </a>
                        . For most developed countries, inflation is generally
                        around 2%, which means that stuffs cost about 2% more
                        every year than the year it did before. For example, in
                        the 70s, a cup of coffee cost about 50 cents, probably
                        less. But now a cup of coffee usually cost about $1 or
                        $2. So if you were to store $1000 under your bed or
                        something, then for the next 5 or 10 years time your
                        $1000 would not be worth $1000 anymore because
                        everything would have increase in price by about 2% each
                        year. This is not a good situation because the value of
                        your money fallen over time. Even if you were to store
                        your money in a bank for example, which usually has an
                        interest rate of about 0.5%, you would still loses your
                        money because inflation rate is higher.
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        Of course, there are also many other reasons for why
                        people start investing, but inflation is usually the
                        main reason. With all that said, how do we actually make
                        money from investment? Well, imagine a hypothetical
                        savings account that gives us a 10% interest rate each
                        year. So if you initially have $1000, then in 10 years
                        time your money will have become roughly $2600. If we
                        adjust for inflation, you would still have about $2100.
                        This is obviously very good since we have more than
                        doubled our money by just putting it in a hypothetical
                        saving account. Unfortunately, this hypothetical 10%
                        interest rate saving account doesn&apos;t really exist
                        in real life, because the value is just way too high and
                        unrealistic. So what other options do we have to save
                        our money? Let&apos;s move on to the next section.
                      </Typography>
                    </section>

                    <section>
                      {/* Empty padding */}
                      <Typography id="what_is_investing">‎</Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        What is investing?
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        Investing is the act of putting your money into various
                        financial instruments (in this guide, we&apos;ll be
                        focusing on stocks) in the hopes of that instrument
                        increasing in value, thus providing you with a profit.
                        This allows you to generate a separate income outside of
                        your job that can be used later in life. When you invest
                        in stocks, you are hoping that the values of various
                        companies increase (or the value of the entire market,
                        depending on what you invest in) which then increases
                        the value of your investment, allowing you to later sell
                        these investments for more money than you bought them.
                      </Typography>
                    </section>

                    <section>
                      {/* Empty padding */}
                      <Typography id="what_is_a_stock">‎</Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        What is a stock?
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        A stock represents a public company traded on an
                        exchange. These may be companies like Apple, Tesla, or
                        other smaller companies. When you buy a stock, you are
                        buying &quot;shares&quot; within the company. These
                        shares technically make you a part-owner of the company,
                        but usually at a very insignificant level. For example,
                        a company may have 500 million available shares. So if
                        you buy 100 shares, you own 0.00002% of that company.
                        Each share has a price that is determined by the stock
                        market and over time these shares either increase or
                        decrease in value depending on the performance or value
                        of the company.
                      </Typography>
                    </section>

                    <section>
                      {/* Empty padding */}
                      <Typography id="what_is_trading">‎</Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        What is trading?
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        Technically speaking, all forms of transactions in the
                        stock market are trades. In the stock market,
                        &quot;trading&quot; usually refers to a specific type of
                        behavior, which is short-term speculation. Traders
                        usually seek to profit on fluctuations in price that
                        take place within one day, many days, many weeks, or
                        even many months, but often not many years unless one is
                        a long-term investor. These trades are often driven by
                        events like company earnings/financial announcements,
                        important company news, general market condition, or
                        advanced technical analysis of the stock. Trading is
                        usually a complex and risky endeavor that one should
                        only pursue after having a solid understanding of the
                        fundamentals of the market.
                      </Typography>
                    </section>

                    <section>
                      {/* Empty padding */}
                      <Typography id="investment_vs_trading">‎</Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        Investment vs trading
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        The objective of investment/trading is to generate a
                        larger benefit and return in the future. Both of these
                        terms refer to the act of buying/selling investments in
                        the form of shares in the stock market. There are no
                        technical definitions that dictates what count as
                        investing and what count as trading. However, according
                        to the general consensus, the terms are often use to
                        differentiate between to very different methods in
                        trying to make money from investments.
                        <ul>
                          <li>
                            <strong>Investing</strong>
                            <div>
                              The goal of investing is to gradually build wealth
                              over an extended period of time through the buying
                              and holding of a portfolio of stocks, baskets of
                              stocks, mutual funds, bonds, and other investment
                              instruments. Investments often are held for a
                              period of years, or even decades, taking advantage
                              of perks like interest, dividends, and stock
                              splits along the way. Investors typically are more
                              concerned with market fundamentals, such as
                              price-to-earnings ratios and management forecasts.
                            </div>
                          </li>

                          <li>
                            <strong>Trading</strong>
                            <div>
                              Traders, on the other hand, take advantage of both
                              rising and falling markets to enter and exit
                              positions over a shorter time frame, taking
                              smaller, but more frequent profits. Trading
                              involves more frequent transactions, such as the
                              buying and selling of stocks, commodities,
                              currency pairs, or other instruments. Trading
                              profits are generated by buying at a lower price
                              and selling at a higher price within a relatively
                              short period of time. The reverse also is true:
                              trading profits can be made by selling at a higher
                              price and buying to cover at a lower price (known
                              as &quot;selling short&quot;) to profit in falling
                              markets. Traders often employ technical analysis
                              tools, such as moving averages and stochastic
                              oscillators, to find high-probability trading
                              setups.
                            </div>
                          </li>
                        </ul>
                      </Typography>
                    </section>

                    <section>
                      {/* Empty padding */}
                      <Typography id="general_advice">‎</Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        General advice
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        Trading requires lot of effort and time, and many trades
                        usually only yield very little fraction of a percentage
                        point. In other words, it would be difficult to profit
                        as an amateur trader, as one have to make decisions that
                        rely on little information in a short time frame.
                        Furthermore, an amateur trader has to compete with
                        industry professionals who own large sums of budget,
                        extensive research, and cutting-edge computer
                        algorithms. Although there are people do who make a
                        living from full-time trading, they are usually
                        high-risk and high-return scenarios and there are lots
                        of research involved in order to minimize risks. For
                        this reason, any advisors will usually advice against
                        trading for the average person and favor investing as
                        one is more likely to benefit from the overall growth of
                        economy and the stock market as a whole.
                      </Typography>
                    </section>

                    <section>
                      {/* Empty padding */}
                      <Typography id="but_how_do_I_buy_a_share_in_the_first_place">
                        ‎
                      </Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        But how do I buy a share in the first place?
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        Let&apos;s say you want to buy a share from Apple, it is
                        not as simple as going to{" "}
                        <a className={classes.linkText} href="http://apple.com">
                          apple.com
                        </a>{" "}
                        and just click &quot;buy share&quot; or whatever.
                        Instead, you have to go through what&apos;s called a
                        broker. In the old days, a stockbroker was a physical
                        person that receives orders from clients to buy/shell
                        shares. Nowadays, you can make an account on an online
                        broker instead and buy company shares through that.
                        There are often fees associated with brokers (i.e.,
                        commissions), and each broker can provide you different
                        features and benefits that may be more or less suited to
                        your investment plans. It is best to first learn about
                        how brokers work at the{" "}
                        <a
                          className={classes.linkText}
                          href="https://www.investopedia.com/investing/complete-guide-choosing-online-stock-broker/"
                        >
                          Investopedia guide to brokers
                        </a>
                        . However, do keep in mind that every country has
                        different brokers and rules that you must abide to.
                      </Typography>
                    </section>

                    <section>
                      {/* Empty padding */}
                      <Typography id="market_capitalization">‎</Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        Market Capitalization
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        You can determine the value of a company (and thus the
                        value of its stock) in several ways. The easiest way is
                        to look at the company&apos;s market value, also known
                        as market capitalization (or market cap). Calculating
                        market cap is pretty simple; for example, if a company
                        has 20 million shares outstanding and its share price is
                        $10, then the market cap is $200 million. In the stock
                        market, the size of a company is measured by its market
                        cap. Here are the basic stock categories of market
                        capitalization:
                        <ul>
                          <li>
                            <strong>Nano cap (less than $50 million)</strong>
                            <div>
                              Nano cap is as small as you can get in terms of
                              market capitalization. Nano caps are very risky
                              because they are such small companies and are
                              particularly prone to manipulation. Nano cap
                              stocks are also often referred to as penny stocks.
                            </div>
                          </li>

                          <li>
                            <strong>
                              Micro cap ($50 million to $300 million)
                            </strong>
                            <div>
                              Micro caps are known for their volatility, and as
                              such, tend to be considered riskier (although not
                              as risky as nano caps) than companies with larger
                              market capitalization.
                            </div>
                          </li>

                          <li>
                            <strong>
                              Small cap ($300 million to $2 billion)
                            </strong>
                            <div>
                              The definition for small cap varies among
                              brokerages, but they are generally companies with
                              $300 million to $2 billion in market cap. These
                              stocks fare better than the micro caps and still
                              have plenty of growth opportunities.
                            </div>
                          </li>

                          <li>
                            <strong>Mid cap ($2 billion to $10 billion)</strong>
                            <div>
                              For many investors, this category offers a good
                              compromise between small caps and large caps.
                              These stocks have some of the safety of large caps
                              while retaining some of the growth potential of
                              small caps.
                            </div>
                          </li>

                          <li>
                            <strong>
                              Large cap ($10 billion to $200 billion)
                            </strong>
                            <div>
                              This category is usually best reserved for
                              conservative stock investors who want steady
                              appreciation with greater safety. Stocks in this
                              category are frequently referred to as &quot;blue
                              chips&quot;.
                            </div>
                          </li>

                          <li>
                            <strong>Mega cap (more than $200 billion)</strong>
                            <div>
                              Refer to companies that are the biggest of the
                              big. Companies such as Apple or Amazon are an
                              example of this.
                            </div>
                          </li>
                        </ul>
                        From a safety point of view, a company&apos;s size and
                        market value do matter. In general, large cap stocks are
                        considered safer than small cap stocks. However, small
                        cap stocks have greater potential for growth. Although
                        market cap is an important factor to consider, one must
                        not invest based solely on it as there are other
                        important factors as well.
                      </Typography>
                    </section>

                    <section>
                      {/* Empty padding */}
                      <Typography id="common_terminologies_in_the_stock_market">
                        ‎
                      </Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        Common terminologies in the stock market
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        If you&apos;re a beginner, you will most likely be
                        bombarded with lots of unfamiliar terms when you read
                        topics related to stock trading. If you are ever
                        confused about the meaning of a certain terminology,
                        Investopedia is usually a great place to seek
                        explanations. Nevertheless, here is a list of common
                        terminologies that you will encounter:
                        <ul>
                          <li>
                            <strong>Volume</strong>
                            <div>
                              Volume is how active a particular company is over
                              a period of time in terms of trading; in other
                              words, the number of shares that are being traded.
                              Typically, you want to look for companies with
                              high volume to avoid issues with liquidity and
                              other reasons. However, if volume is much higher
                              than the average volume in a given period, you may
                              see wilder swings (good or bad) and volatility.
                            </div>
                          </li>

                          <li>
                            <strong>Dividend</strong>
                            <div>
                              A scheduled payout from a company. Dividends are
                              used to reward investors for investing in a
                              company. They can be paid monthly, quarterly,
                              yearly, or on a one-time special basis. Dividends
                              are often issued by mature companies but also
                              companies with limited growth, REITs, and
                              struggling companies trying to attract investors
                              or keep current ones happy. Dividends can be
                              great, especially for income investors, but it’s
                              important to note that they can limit growth and
                              aren’t tax efficient (you&apos;re forced to pay
                              taxes on dividends vs just holding) when held
                              outside a tax advantaged account. Never invest in
                              a company solely for its dividend.
                            </div>
                          </li>

                          <li>
                            <strong>Earnings Per Share (EPS)</strong>
                            <div>
                              The amount of profit allocated to a share of
                              common stock.
                            </div>
                            <MathComponent
                              tex={String.raw`EPS=\frac{Net\ Income\ -\ Dividends}{\sum Shares\ Outstanding}`}
                              display={true}
                            />
                            <div>
                              EPS is very important in determining how
                              successful a company is performing and where it
                              stands in terms of profitability. Usually, the
                              higher a company&apos;s EPS, the more profitable
                              it is considered to be.
                            </div>
                          </li>

                          <li>
                            <strong>P/E Ratio</strong>
                            <MathComponent
                              tex={String.raw`P/E\ Ratio=\frac{Share\ Price}{EPS}`}
                              display={true}
                            />
                            <div>
                              High P/E typically indicates expectations of high
                              growth. This is why we see companies like Amazon
                              with relatively high P/E&apos;s. Low P/E&apos;s
                              may indicate a company is pretty mature and that
                              limited growth is expected.
                            </div>
                          </li>

                          <li>
                            <strong>PEG Ratio</strong>
                            <div>
                              PEG ratio is used to determine the value of a
                              stock while taking into account growth of a
                              company&apos;s earnings growth, and it is thought
                              to provide a more complete picture than P/E ratio.
                              The price/earnings to growth ratio (PEG ratio) is
                              a stock&apos;s price-to-earnings (P/E) ratio
                              divided by the growth rate of its earnings for a
                              specified time period.
                            </div>
                            <MathComponent
                              tex={String.raw`PEG\ Ratio=\frac{P/E\ Ratio}{EPS\ Growth}`}
                              display={true}
                            />
                            <div>
                              However, the expected EPS growth rate is not that
                              easy to calculate. Analysts usually derive an
                              estimation according to the company&quot;s
                              historical growth rates.
                            </div>
                          </li>

                          <li>
                            <strong>ROA</strong>
                            <MathComponent
                              tex={String.raw`ROA=\frac{Net\ Income}{Total\ Assets}`}
                              display={true}
                            />
                            <div>
                              Return on Assets (ROA) is an indicator of how
                              profitable a company is relative to its total
                              assets. ROA gives a manager, investor, or analyst
                              an idea as to how efficient a company&apos;s
                              management is at using its assets to generate
                              earnings. ROA is displayed as a percentage; the
                              higher the ROA is, the better. Although some
                              companies will have low ROA by the nature of their
                              business such as bank stocks.
                            </div>
                          </li>

                          <li>
                            <strong>ROE</strong>
                            <MathComponent
                              tex={String.raw`ROE=\frac{Net\ Income}{Average\ Shareholders'\ Equity}`}
                              display={true}
                            />
                            <div>
                              Return on Equity (ROE) can be used to get a better
                              idea of future growth, how debt is impacting
                              things, and how the company compares to its peers
                              in the industry.
                            </div>
                          </li>

                          <li>
                            <strong>BETA</strong>
                            <div>
                              The measure of volatility and risk of a company
                              compared to the market as a whole. A stock with a
                              BETA of 1 means that it will likely act similar
                              and correspond with the market. A stock with a
                              BETA lower than 1 typically means less volatility
                              is expected while a stock with a BETA higher than
                              1 means it could potentially more volatile. These
                              things aren&apos;t set in stone and companies can
                              react and perform quite differently than what
                              their BETA would initially indicate.
                            </div>
                          </li>
                        </ul>
                        If you still don&apos;t quite understand the
                        terminologies, don&apos;t worry too much about them.
                        Although they are useful, you wouldn&apos;t really need
                        to understand every little details unless you&apos;re
                        doing day trading or fundamental/technical analysis.
                      </Typography>
                    </section>
                  </section>

                  <section>
                    {/* Empty padding */}
                    <Typography id="understanding_candlestick_charts">
                      ‎
                    </Typography>

                    <Typography className={classes.topic} variant="h1">
                      Part 2 Understanding Candlestick Charts
                    </Typography>

                    <section>
                      {/* Empty padding */}
                      <Typography id="history">‎</Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        History
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        Candlestick charts are thought to have been developed in
                        the 18th century by Munehisa Homma, a Japanese rice
                        trader. They were popularized in the west by Steve
                        Nison. According to him, it is likely that the original
                        candlestick chart were modified and refined over many
                        years of trading, eventually resulting in the system of
                        candlestick charting that we use today.
                      </Typography>
                    </section>

                    <section>
                      {/* Empty padding */}
                      <Typography id="explanation">‎</Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        Explanation
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        Each candlestick chart contains four data sets, namely
                        open, high, low and close values over a certain time
                        period.
                      </Typography>

                      <img
                        alt="candlestick"
                        src="candlestick.svg"
                        width="80%"
                        height="auto"
                      />

                      <Typography className={classes.paragraph} variant="body1">
                        The colored portion of the candlestick is called
                        &quot;the body&quot; (also referred to as &quot;the real
                        body&quot;). The long thin lines above and below the
                        body represent the high/low range and are called
                        &quot;shadows&quot; (also referred to as
                        &quot;wicks&quot; and &quot;tails&quot;). The high is
                        marked by the top of the upper shadow and the low by the
                        bottom of the lower shadow.
                        <ul>
                          <li>
                            <strong>Open price</strong>
                            <div>
                              The open price depicts the first price traded
                              during the formation of the new candle. If the
                              price starts to trend upwards the candle will turn
                              green. If the price declines the candle will turn
                              red. Actually, the coloring scheme of the charts
                              depends on the website. The most popular colors
                              are &quot;green&quot; and &quot;red&quot;, to
                              indicate &quot;rise&quot; and &quot;fall&quot;
                              respectively (although there are some websites
                              that use blue/red or white/black).
                            </div>
                          </li>

                          <li>
                            <strong>Close price</strong>
                            <div>
                              The close price is the last price traded during
                              the period of the candle formation. If the price
                              starts to trend upwards the candle will turn
                              green. If the price declines the candle will turn
                              red. Actually, the coloring scheme of the charts
                              depends on the website. The most popular colors
                              are &quot;green&quot; and &quot;red&quot;, to
                              indicate &quot;rise&quot; and &quot;fall&quot;
                              respectively (although there are some websites
                              that use blue/red or white/black).
                            </div>
                          </li>

                          <li>
                            <strong>High price</strong>
                            <div>
                              The top of the upper wick/shadow indicates the
                              highest price traded during the period. In other
                              words, the price reached this highest point at a
                              particular time during the trading period. If
                              there is no upper wick/shadow it means that the
                              open price or the close price was the highest
                              price traded.
                            </div>
                          </li>

                          <li>
                            <strong>Low price</strong>
                            <div>
                              The lowest price traded is the either the price at
                              the bottom of the lower wick/shadow. In other
                              words, the price reached this lowest point at a
                              particular time during the trading period. If
                              there is no lower wick/shadow then the lowest
                              price traded is the same as the close price or
                              open price in a bullish candle.
                            </div>
                          </li>
                        </ul>
                        Compared to traditional bar charts, many traders
                        consider candlestick charts more visually appealing and
                        easier to interpret. Each candlestick provides a simple,
                        visually appealing picture of price action; a trader can
                        instantly compare the relationship between the open and
                        close as well as the high and low. The relationship
                        between the open and close is considered vital
                        information and forms the essence of candlesticks. Green
                        candlesticks, where the close is greater than the open,
                        indicate <strong>buying pressure</strong>. While red
                        candlesticks, where the close is less than the open,
                        indicate <strong>selling pressure</strong>.
                      </Typography>
                    </section>

                    <section>
                      {/* Empty padding */}
                      <Typography id="indicators">‎</Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        Indicators
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        The followings are common indicators that you will
                        encounter on a stock trading website. They are useful in
                        providing extra information that aid traders in their
                        investment strategies.
                        <ul>
                          <li>
                            <strong>Moving Average (MA)</strong>
                            <div>
                              In statistics, a moving average is a calculation
                              used to analyze data points by creating a series
                              of averages of different subsets of the full data
                              set. In finance, a moving average (MA) is a stock
                              indicator that is commonly used in technical
                              analysis. The reason for calculating the moving
                              average of a stock is to help smooth out the price
                              data by creating a constantly updated average
                              price. By calculating the moving average, the
                              impacts of random, short-term fluctuations on the
                              price of a stock over a specified time-frame are
                              mitigated. Common MA periods that you will find
                              are 10, 20, 50, 100, and 200. The longer the time
                              period for the moving average, the greater the
                              lag. So, a 200-day moving average will have a much
                              greater degree of lag than a 20-day MA because it
                              contains prices for the past 200 days.
                            </div>
                          </li>

                          <li>
                            <strong>Relative Strength Index (RSI)</strong>
                            <div>
                              The relative strength index (RSI) is a momentum
                              indicator used in technical analysis that measures
                              the magnitude of recent price changes to evaluate
                              overbought or oversold conditions in the price of
                              a stock or other asset. The RSI is displayed as an
                              oscillator (a line graph that moves between two
                              extremes) and can have a reading from 0 to 100.
                              Traditional interpretation and usage of the RSI
                              are that values of 70 or above indicate that a
                              security is becoming overbought or overvalued and
                              may be primed for a trend reversal or corrective
                              pullback in price. An RSI reading of 30 or below
                              indicates an oversold or undervalued condition.
                            </div>
                          </li>

                          <li>
                            <strong>
                              Volume Weighted Average Price (VWAP)
                            </strong>
                            <div>
                              Volume weighted average price (VWAP) is a trading
                              benchmark used by traders that gives the average
                              price a security has traded at throughout the day,
                              based on both volume and price. It is calculated
                              by taking the total dollar value of trading in the
                              security and dividing it by the volume of trades
                              during that period.
                            </div>
                            <MathComponent
                              tex={String.raw`VWAP=\frac{\sum Shares\ Bought \times Share\ Price}{\sum Volume}`}
                              display={true}
                            />
                            <div>
                              VWAP is important because it provides traders with
                              insight into both the trend and value of a
                              security.
                            </div>
                          </li>
                        </ul>
                        There are many more indicators that are not included in
                        this section. Please consult{" "}
                        <a
                          className={classes.linkText}
                          href="https://www.investopedia.com/"
                        >
                          Investopedia
                        </a>{" "}
                        for more information on chart indicators.
                      </Typography>
                    </section>

                    <section>
                      {/* Empty padding */}
                      <Typography id="patterns">‎</Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        Patterns
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        This section will demonstrate the several common
                        candlestick patterns that are used in technical
                        analysis.
                      </Typography>

                      <Typography className={classes.subsubtopic} variant="h3">
                        Long vs short body
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        Generally speaking, the longer the body is, the more
                        intense the buying or selling pressure. Conversely,
                        short candlesticks indicate little price movement.
                      </Typography>

                      <img
                        alt="long vs short body"
                        src="long_vs_short_body.png"
                      />

                      <Typography className={classes.paragraph} variant="body1">
                        Long green candlesticks show strong buying pressure. The
                        longer the green candlestick is, the further the close
                        is above the open. This indicates that prices advanced
                        significantly from open to close and buyers were
                        aggressive.
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        Long red candlesticks show strong selling pressure. The
                        longer the red candlestick is, the further the close is
                        below the open. This indicates that prices declined
                        significantly from the open and sellers were aggressive.
                      </Typography>

                      <Typography className={classes.subsubtopic} variant="h3">
                        Long vs short shadow
                      </Typography>

                      <img
                        alt="long vs short shadow"
                        src="long_vs_short_shadow.png"
                      />

                      <Typography className={classes.paragraph} variant="body1">
                        Candlesticks with short shadows indicate that most of
                        the trading action was confined near the open and close.
                        Candlesticks with long shadows show that prices extended
                        well past the open and close.
                      </Typography>

                      <Typography className={classes.subsubtopic} variant="h3">
                        Upper vs lower shadow
                      </Typography>

                      <img
                        alt="upper vs lower shadow"
                        src="upper_vs_lower_shadow.png"
                      />

                      <Typography className={classes.paragraph} variant="body1">
                        Candlesticks with a long upper shadow and short lower
                        shadow indicate that buyers dominated during the
                        session, bidding prices higher, but sellers ultimately
                        forced prices down from their highs. This contrast of
                        strong high and weak close resulted in a long upper
                        shadow. Conversely, candlesticks with long lower shadows
                        and short upper shadows indicate that sellers dominated
                        during the session and drove prices lower. However,
                        buyers later resurfaced to bid prices higher by the end
                        of the session; the strong close created a long lower
                        shadow.
                      </Typography>

                      <Typography className={classes.subsubtopic} variant="h3">
                        Doji
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        Doji form when a security&apos;s open and close are
                        virtually equal. The length of the upper and lower
                        shadows can vary, with the resulting candlestick looking
                        like a cross, inverted cross or plus sign.
                      </Typography>

                      <img alt="doji" src="doji.png" />

                      <Typography className={classes.paragraph} variant="body1">
                        Ideally, but not necessarily, the open and close should
                        be equal. While a doji with an equal open and close
                        would be considered more robust, it is more important to
                        capture the essence of the candlestick. Doji convey a
                        sense of indecision or tug-of-war between buyers and
                        sellers. Prices move above and below the opening level
                        during the session, but close at or near the opening
                        level. The result is a standoff. Neither bulls nor bears
                        were able to gain control and a turning point could be
                        developing. In addition, Long-legged doji reflect a
                        great amount of indecision in the market.
                      </Typography>

                      <Typography className={classes.subsubtopic} variant="h3">
                        Dragonfly vs gravestone doji
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        On the one hand, dragonfly doji form when the open, high
                        and close are equal and the low creates a long lower
                        shadow. The resulting candlestick looks like a “T” due
                        to the lack of an upper shadow. Dragonfly doji indicate
                        that sellers dominated trading and drove prices lower
                        during the session. By the end of the session, buyers
                        resurfaced and pushed prices back to the opening level
                        and the session high.
                      </Typography>

                      <img
                        alt="dragonfly vs gravestone doji"
                        src="dragonfly_vs_gravestone_doji.png"
                      />

                      <Typography className={classes.paragraph} variant="body1">
                        On the other hand, gravestone doji form when the open,
                        low and close are equal and the high creates a long
                        upper shadow. The resulting candlestick looks like an
                        upside down “T” due to the lack of a lower shadow.
                        Gravestone doji indicate that buyers dominated trading
                        and drove prices higher during the session. However, by
                        the end of the session, sellers resurfaced and pushed
                        prices back to the opening level and the session low.
                      </Typography>

                      <Typography className={classes.subsubtopic} variant="h3">
                        Bearish engulfing
                      </Typography>

                      <img
                        alt="bearish engulfing"
                        src="bearish_engulfing.png"
                      />

                      <Typography className={classes.paragraph} variant="body1">
                        To engulf means to swallow, notice how the red
                        candlestick covers the entirety of the previous green
                        candlestick. A bearish engulfing pattern develops in an
                        uptrend when sellers outnumber buyers. This action is
                        reflected by a long red real body engulfing a small
                        green real body. The pattern indicates that sellers are
                        back in control and that the price could continue to
                        decline.
                      </Typography>

                      <Typography className={classes.subsubtopic} variant="h3">
                        Bullish engulfing
                      </Typography>

                      <img
                        alt="bullish engulfing"
                        src="bullish_engulfing.png"
                      />

                      <Typography className={classes.paragraph} variant="body1">
                        To engulf means to swallow, notice how the green
                        candlestick covers the entirety of the previous red
                        candlestick. An engulfing pattern on the bullish side of
                        the market takes place when buyers outpace sellers. This
                        is reflected in the chart by a long green real body
                        engulfing a small red real body. With bulls having
                        established some control, the price could head higher.
                      </Typography>

                      <Typography className={classes.subsubtopic} variant="h3">
                        Conclusion
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        There are many more candlestick patterns that won&apos;t
                        be discussed further in this section. However, do keep
                        in mind that a single candlestick pattern by itself is
                        often not very helpful, as it is not enough in
                        understanding the situation or the general trend of the
                        stock market. Traders usually study the combinations of
                        more complex candlestick patterns to understand the
                        overall picture and predict the market.
                      </Typography>
                    </section>
                  </section>

                  <section>
                    {/* Empty padding */}
                    <Typography id="paper_trading_with_visutrader">
                      ‎
                    </Typography>

                    <Typography className={classes.topic} variant="h1">
                      Part 3 Paper Trading with VisuTrader
                    </Typography>

                    <Typography className={classes.paragraph} variant="body1">
                      You will be given $100,000 USD after you create an account
                      on VisuTrader. The trading page consists of four
                      sections/cards, namely a card dedicated in generating the
                      daily stock chart of a given company, a card showing the
                      general information of the company profile, a card to
                      conduct paper trading, and a card listing the available
                      companies. The examples below will illustrate each
                      functionality in more detail.
                    </Typography>

                    <section>
                      <section>
                        {/* Empty padding */}
                        <Typography id="stock_chart">‎</Typography>

                        <Typography className={classes.subtopic} variant="h2">
                          Stock chart
                        </Typography>

                        <Typography
                          className={classes.paragraph}
                          variant="body1"
                        >
                          The stock chart displays the end-of-day stock prices
                          of a given company. By default, it will display in
                          candlestick chart. Unfortunately, we currently
                          don&apos;t support intraday chart as the free CanvasJS
                          library that we are using are limited in capability.
                          Also, Alpha Vantage API that we are using for
                          gathering stock data are limited to only 5
                          requests/minute, therefore the implementation of
                          intraday stock chart is out of the question.
                        </Typography>

                        <img
                          alt="demo_1"
                          src="demo_1.png"
                          width="100%"
                          height="auto"
                        />

                        <Typography
                          className={classes.paragraph}
                          variant="body1"
                        >
                          <ol>
                            <li>
                              <div>
                                The range option let you select the
                                duration/range of the stock prices that you want
                                to focus on.
                              </div>

                              <div>
                                1m = 1 month, 3m = 3 month, 6m = 6 month, YTD =
                                yesterday, 1y = 1 year, All = all.
                              </div>
                            </li>

                            <li>
                              <div>
                                An information box will appear when you hover
                                your mouse over the candlestick. The box display
                                the open, high, low, and close prices of the
                                stock at the end of that date.
                              </div>
                            </li>

                            <li>
                              <div>
                                An option two choose between
                                &quot;candlestick&quot; and &quot;spline
                                area&quot; charts. The spline area chart will
                                look like this.
                              </div>

                              <img
                                alt="demo_2"
                                src="demo_2.png"
                                width="100%"
                                height="auto"
                              />
                            </li>

                            <li>
                              <div>
                                You can choose the range of stocks that you want
                                to see by selecting the starting and end ending
                                date.
                              </div>
                            </li>

                            <li>
                              <div>
                                A navigation bar, drag left/right to move the
                                chart or resize it to modify the range of the
                                chart.
                              </div>
                            </li>
                          </ol>
                        </Typography>
                      </section>

                      <section>
                        {/* Empty padding */}
                        <Typography id="company_overview">‎</Typography>

                        <Typography className={classes.subtopic} variant="h2">
                          Company overview
                        </Typography>

                        <img
                          alt="demo_3"
                          src="demo_3.png"
                          width="40%"
                          height="auto"
                        />

                        <Typography
                          className={classes.paragraph}
                          variant="body1"
                        >
                          Display the current stock price of the company, as
                          well as the profile, key statistics and the
                          performance of the company. The performance is
                          measured by the difference in stock prices over
                          specific periods of time.
                        </Typography>
                      </section>

                      <section>
                        {/* Empty padding */}
                        <Typography id="paper_trading">‎</Typography>

                        <Typography className={classes.subtopic} variant="h2">
                          Paper trading
                        </Typography>

                        <img
                          alt="demo_4"
                          src="demo_4.png"
                          width="40%"
                          height="auto"
                        />

                        <Typography
                          className={classes.paragraph}
                          variant="body1"
                        >
                          Unfortunately, the order type that is available
                          currently is only &quot;market order&quot;. We
                          couldn&apos;t implement &quot;limit order&quot; as we
                          don&apos;t have access to intraday stock data due to
                          Alpha Vantage API limitation.
                        </Typography>

                        <Typography
                          className={classes.paragraph}
                          variant="body1"
                        >
                          The paper trading mechanism that we provided here is
                          pretty simple, similar to how you would buy something
                          on an online shop. So, simply indicate the quantity
                          and choose whether you want to buy/sell, and if the
                          transaction is successful/failed, you will be notified
                          by a message prompt.
                        </Typography>

                        <Typography
                          className={classes.paragraph}
                          variant="body1"
                        >
                          After a successful transaction, you can head over to
                          the wallet page to see your transaction activity.
                        </Typography>

                        <img
                          alt="demo_5"
                          src="demo_5.png"
                          width="100%"
                          height="auto"
                        />

                        <Typography
                          className={classes.paragraph}
                          variant="body1"
                        >
                          The most recent transaction will be shown on the
                          bottom of the history. The position card on the right
                          will show you how many stocks that you currently own
                          from each company.
                        </Typography>

                        <Typography
                          className={classes.paragraph}
                          variant="body1"
                        >
                          You can also view the balance trend and your current
                          cash flow.
                        </Typography>

                        <img
                          alt="demo_6"
                          src="demo_6.png"
                          width="100%"
                          height="auto"
                        />
                      </section>

                      <section>
                        {/* Empty padding */}
                        <Typography id="my_watchlist">‎</Typography>

                        <Typography className={classes.subtopic} variant="h2">
                          My watchlist
                        </Typography>

                        <img
                          alt="demo_7"
                          src="demo_7.png"
                          width="40%"
                          height="auto"
                        />

                        <Typography
                          className={classes.paragraph}
                          variant="body1"
                        >
                          Here, you can click on each company, it will change
                          the company overview automatically and you now can
                          buy/sell the stocks from said company.
                        </Typography>

                        <Typography
                          className={classes.paragraph}
                          variant="body1"
                        >
                          Admittedly, this is quite different from the ideal
                          watchlist where you will be able to view the current
                          stock prices of each company in real-time. We were
                          unable to implement such a feature due to Alpha
                          Vantage API limitation as we are only allowed to send
                          5 requests every minute. Unfortunately, it is for this
                          reason as well that we can only provide three
                          companies to choose from.
                        </Typography>
                      </section>
                    </section>
                  </section>

                  <section>
                    {/* Empty padding */}
                    <Typography id="resources">‎</Typography>

                    <Typography className={classes.topic} variant="h1">
                      Part 4 Resources
                    </Typography>

                    <Typography className={classes.paragraph} variant="body1">
                      These are the useful resources that we used as references
                      and inspiration for this guide. Highly recommended for
                      further self-exploration.
                    </Typography>

                    <section>
                      {/* Empty padding */}
                      <Typography id="getting_started">‎</Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        Getting started
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        Self-learn courses for beginners.
                        <ul>
                          <li>
                            <a
                              className={classes.linkText}
                              href="https://www.investopedia.com/investing-4427685"
                            >
                              Investopedia University
                            </a>
                          </li>
                          <li>
                            <a
                              className={classes.linkText}
                              href="https://www.khanacademy.org/economics-finance-domain/core-finance/stock-and-bonds"
                            >
                              Khan Academy guide to stocks and bonds
                            </a>
                          </li>
                        </ul>
                      </Typography>
                    </section>

                    <section>
                      {/* Empty padding */}
                      <Typography id="relevant_websites">‎</Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        Relevant websites
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        <ul>
                          <li>
                            <a
                              className={classes.linkText}
                              href="https://www.investopedia.com/"
                            >
                              Investopedia
                            </a>
                            <div>General knowledge platform</div>
                          </li>
                          <li>
                            <a
                              className={classes.linkText}
                              href="https://www.finviz.com/"
                            >
                              Finviz
                            </a>
                            <div>
                              Charts, technical data, patterns, and scanners
                            </div>
                          </li>
                          <li>
                            <a
                              className={classes.linkText}
                              href="https://www.tradingview.com/"
                            >
                              TradingView
                            </a>
                            <div>
                              Free, real-time streaming charts and many
                              technical analysis tools
                            </div>
                          </li>
                          <li>
                            <a
                              className={classes.linkText}
                              href="https://www.marketwatch.com/"
                            >
                              MarketWatch
                            </a>
                            <div>
                              Great source for market related news and
                              information
                            </div>
                          </li>
                          <li>
                            <a
                              className={classes.linkText}
                              href="https://www.bloomberg.com/live/"
                            >
                              Bloomberg live streaming
                            </a>
                            <div>
                              Free live streaming news alternative to CNBC, and
                              depending on your preference, a better news
                              source. Either way if you have access to CNBC,
                              then you can stream both CNBC & Bloomberg on your
                              computer and switch to the one of your choice.
                            </div>
                          </li>
                        </ul>
                      </Typography>
                    </section>

                    <section>
                      {/* Empty padding */}
                      <Typography id="relevant_posts">‎</Typography>

                      <Typography className={classes.subtopic} variant="h2">
                        Relevant posts
                      </Typography>

                      <Typography className={classes.paragraph} variant="body1">
                        <ul>
                          <li>
                            <a
                              className={classes.linkText}
                              href="https://www.reddit.com/r/stocks"
                            >
                              Reddit Stocks Forum
                            </a>
                          </li>
                          <li>
                            <a
                              className={classes.linkText}
                              href="https://www.reddit.com/r/Daytrading/wiki/book-recommendations"
                            >
                              Day Trading Books
                            </a>
                          </li>
                          <li>
                            <a
                              className={classes.linkText}
                              href="https://www.reddit.com/r/investing/comments/9y490a/what_are_the_best_investing_books_for_beginners/"
                            >
                              Books on Investing
                            </a>
                          </li>
                          <li>
                            <a
                              className={classes.linkText}
                              href="https://www.bogleheads.org/RecommendedReading.php"
                            >
                              Bogleheads&apos; suggested readings
                            </a>
                          </li>
                        </ul>
                      </Typography>
                    </section>
                  </section>
                </article>
              </div>
            </Grid>

            <Grid item xs={3}>
              <TableOfContents classes={classes} />
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    );
  } else {
    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Box pt={4}>
            <Typography variant="h3" align="center">
              Sign up to unlock this feature
            </Typography>
          </Box>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    );
  }
}

function TableOfContents({ classes }) {
  return (
    <Drawer variant="permanent" anchor="right">
      <List style={{ width: 390 }}>
        <ListItem>
          <nav>
            <ul className={classes.list}>
              <li className={classes.tableOfContents}>
                <h2>TABLE OF CONTENTS</h2>
              </li>

              <li>
                <h3>
                  <a
                    className={classes.navigationText}
                    href="#before_you_begin"
                  >
                    Part 1 Before You Begin
                  </a>
                </h3>

                <ul>
                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#why_should_I_consider_investing"
                      >
                        Why should I consider Investing?
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#what_is_investing"
                      >
                        What is investing?
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#what_is_a_stock"
                      >
                        What is a stock?
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#what_is_trading"
                      >
                        What is trading?
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#investment_vs_trading"
                      >
                        Investment vs trading
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#general_advice"
                      >
                        General advice
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#but_how_do_I_buy_a_share_in_the_first_place"
                      >
                        But how do I buy a share in the first place?
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#market_capitalization"
                      >
                        Market Capitalization
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#common_terminologies_in_the_stock_market"
                      >
                        Common terminologies in the stock market
                      </a>
                    </h4>
                  </li>
                </ul>
              </li>

              <li>
                <h3>
                  <a
                    className={classes.navigationText}
                    href="#understanding_candlestick_charts"
                  >
                    Part 2 Understanding Candlestick Charts
                  </a>
                </h3>

                <ul>
                  <li>
                    <h4>
                      <a className={classes.navigationText} href="#history">
                        History
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a className={classes.navigationText} href="#explanation">
                        Explanation
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a className={classes.navigationText} href="#indicators">
                        Indicators
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a className={classes.navigationText} href="#patterns">
                        Patterns
                      </a>
                    </h4>
                  </li>
                </ul>
              </li>

              <li>
                <h3>
                  <a
                    className={classes.navigationText}
                    href="#paper_trading_with_visutrader"
                  >
                    Part 3 Paper Trading with VisuTrader
                  </a>
                </h3>

                <ul>
                  <li>
                    <h4>
                      <a className={classes.navigationText} href="#stock_chart">
                        Stock chart
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#company_overview"
                      >
                        Company overview
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#paper_trading"
                      >
                        Paper trading
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#my_watchlist"
                      >
                        My watchlist
                      </a>
                    </h4>
                  </li>
                </ul>
              </li>

              <li>
                <h3>
                  <a className={classes.navigationText} href="#resources">
                    Part 4 Resources
                  </a>
                </h3>

                <ul>
                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#getting_started"
                      >
                        Getting started
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#relevant_websites"
                      >
                        Relevant websites
                      </a>
                    </h4>
                  </li>

                  <li>
                    <h4>
                      <a
                        className={classes.navigationText}
                        href="#relevant_posts"
                      >
                        Relevant posts
                      </a>
                    </h4>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </ListItem>
      </List>
    </Drawer>
  );
}
