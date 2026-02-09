def intToBinary(value):
    final_binary_value = ""
    binary_count = 0
    temp_value = value
    while temp_value > 0:
        temp_value //=2
        binary_count += 1

    for i in range(1, binary_count+1):
        if int(value // 2**(binary_count - i)) == 1:
            final_binary_value += "1"
            value -= 2**(binary_count - i)
        else:
            final_binary_value += "0"
    return(final_binary_value)

print(intToBinary(2123))
        

