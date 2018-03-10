# Refactored JS solution to Ruby

sum_total = 0

for i in 1..999 do
    if i % 3 == 0 || i % 5 == 0
		sum_total+=i
    end
end

puts 'Sum total of all multiples of 3 or 5 below 1000 is: ' + sum_total.to_s