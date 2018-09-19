# Implement a method #stock_picker that takes in an array of stock prices, one for each hypothetical day.
# It should return a pair of days representing the best day to buy and the best day to sell. Days start at 0.

def stock_picker(arr)
  max_pair = nil
  max_profit = 0
  (0..arr.length-2).each do |buy_date|
    ((buy_date + 1)...arr.length).each do |sell_date|
      if arr[buy_date] - arr[sell_date] < max_profit
        max_profit = arr[buy_date] - arr[sell_date]
        max_pair = [buy_date, sell_date]
      end
    end
  end
  max_pair
end
