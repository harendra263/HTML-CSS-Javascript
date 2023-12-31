

class Reverse:
    """Creates Iterators for looping over a sequence backwards"""

    def __init__(self, data):
        self.data = data
        self.index = len(data)
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.index == 0:
            raise StopIteration
        self.index = self.index - 1
        return self.data[self.index]
    

lst = [34, 978, 42]

lst_backwards = Reverse(lst)
