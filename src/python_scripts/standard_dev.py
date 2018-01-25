#standard_dev.py

def parse(string):
    dict = ""
    dict = string.split(" ")
    num_array = []
    for key in dict:
        num_array.append(float(key))
    return num_array

def sum(sample):
    sum = 0
    for x in sample:
        sum += x
    return sum

def sample_variance(sample_mean, sample):
    var_list = []
    for x in sample:
        temp = (x - sample_mean)**2
        var_list.append(temp)
    variance = sum(var_list) / len(var_list)
    return variance

def y1_list(sample_list, a, b):
    y1_list = []
    def y1_item(item):
        mult = item * a
        return mult + b
    for x in sample_list:
        y1_list.append(y1_item(x))
    return y1_list


while True:
    sample_list = raw_input("Type input use a space to seperate numbers: ")
    if sample_list != "":
        sample = parse(sample_list)
        print "Sample list: {0}".format(sample)
        sample_sum = sum(sample)
        sample_mean = sample_sum / len(sample)
        print "Sample Mean: %.2f" % sample_mean
        variance = sample_variance(sample_mean, sample)
        print "Sample Variance: %.2f" % variance
        st_dev = variance ** 0.5
        print "Standard Deviation: %.2f" % st_dev
        y1_list = y1_list(sample, 3.0, 1000.00)
        print "Y1 List Values: {0}".format(y1_list)
        y1_sum = sum(y1_list)
        y1_mean = y1_sum / len(y1_list)
        print "Y1 Mean: %.2f" % y1_mean
        y1_variance = sample_variance(y1_mean, y1_list)
        print "Y1 Sample Variance: %.2f" % y1_variance
        y1_st_dev = y1_variance ** 0.5
        print "Y1 Standard Deviation: %.2f" % y1_st_dev
        print "End!"
        break
    else:
        print ("Enter valid numbers!")

    