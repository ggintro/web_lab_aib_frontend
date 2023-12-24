n, X, medians, sum = int(input("Введите n ")), list(map(int, input("Введите последовательность чисел X: ").split())), [], 0
for i in range(n):
    X[:i+1]= sorted(X[:i+1])
    if (i + 1) % 2 == 1: median = X[(i + 1) // 2]
    else:median = X[i // 2]
    medians.append(median)
for median in medians: sum += median
print("\nСумма медиан:", sum)   