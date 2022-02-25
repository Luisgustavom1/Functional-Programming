-- Curried Functions

-- multThree :: (Num a) => a -> (a -> (a -> a))
multThree :: (Num a) => a -> a -> a -> a
multThree x y z = x * y * z

-- let multiply3 = multThree 3
-- let multiply12 = multiply 4
-- multiply12 5

compareWithHundred :: (Num a, Ord a) => a -> Ordering
compareWithHundred = compare 100

divideByTwoHundred :: (Floating a) => a -> a
divideByTwoHundred = (/ 200)

isUpperAlphanum :: Char -> Bool
isUpperAlphanum = (`elem` ['A' .. 'Z'])

-- Take a function as as parameter
applyTwice :: (a -> a) -> a -> a
applyTwice f x = f (f x)

zipWith' :: (a -> b -> c) -> [a] -> [b] -> [c]
zipWith' _ [] _ = []
zipWith' _ _ [] = []
zipWith' f (x : xs) (y : ys) = f x y : zipWith' f xs ys

flip' :: (a -> b -> c) -> b -> a -> c
flip' f = \a b -> f b a

ifIsBigger :: (Ord a) => a -> a -> Bool
ifIsBigger x y = y > x

filter' :: (a -> Bool) -> [a] -> [a]
filter' _ [] = []
filter' p (x : xs)
  | p x = x : filter' p xs
  | otherwise = filter' p xs

quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x : xs) =
  let smallerSorted = quicksort (filter' (<= x) xs)
      biggerSorted = quicksort (filter' (> x) xs)
   in smallerSorted ++ [x] ++ biggerSorted

largestDivisible :: (Integral a) => a
largestDivisible = head (filter p [100000, 99999 ..])
  where
    p x = x `mod` 3829 == 0

--  Sum of all odd squares that are smaller than 10000
-- sum (takeWhile (<10000) (filter odd (map (^2) [1..])))
-- sum (takeWhile (<10000) [n^2 | n <- [1..], odd (n^2)])

chain :: (Integral a) => a -> [a]
chain 1 = [1]
chain n
  | even n = n : chain (n `div` 2)
  | odd n = n : chain (n * 3 + 1)

numLongChains :: Int
numLongChains = length (filter isLong (map chain [1 .. 100]))
  where
    isLong xs = length xs > 15

numLongChairWithLambda :: Int
numLongChairWithLambda = length (filter (\xs -> length xs > 15) (map chain [1 .. 100]))

-- fold left
multiplyAmongThem :: (Num a) => [a] -> a
multiplyAmongThem xs = foldl (\current acc -> acc * current) 1 xs

haveElem :: (Eq a) => a -> [a] -> Bool
haveElem x xs = foldl (\acc y -> if y == x then True else acc) False xs

-- fold right
map' :: (a -> b) -> [a] -> [b]
map' f xs = foldr (\x acc -> (f x) : acc) [] xs

maximum' :: (Ord a) => [a] -> a
maximum' = foldl1 (\acc x -> if x > acc then x else acc)

reverse' :: [a] -> [a]
reverse' xs = foldl (\acc x -> x : acc) [] xs

filterWithFold' :: (a -> Bool) -> [a] -> [a]
filterWithFold' f = foldl (\acc x -> if f x then x:acc else acc) []

-- map (*) [0..10] -> (Num a) => a -> a -> a
-- let listOfMultiplyNumbers = map (*) [1..10]
-- (listOfMultiplyNumbers !! 5) 5 = 30