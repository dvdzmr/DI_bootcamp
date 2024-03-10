class Pagination():

    def __init__(self, items=None, pageSize=10):
        self.items = items
        self.page_size = pageSize
        self.currentpage = 0

    def getVisibleItems(self):
        i = 0
        visible = ""
        if self.currentpage != 0:
            offset = int(self.currentpage * self.page_size)
        else:
            offset = 0
        print("offset is", offset)
        while i < self.page_size:
            if (i+offset) < len(self.items):
                visible += f"{self.items[(i+offset)]}"
            i += 1
        print(visible)

    def nextPage(self):
        if int(len(self.items) // self.page_size)+1 > self.currentpage:
            self.currentpage += 1
        
    def previousPage(self):
        if int(len(self.items) // self.page_size)+1 < self.currentpage:
            self.currentpage -= 1

    def firstPage(self):
        self.currentpage = 0
    
    def lastPage(self):
        self.currentpage = int(len(self.items) // self.page_size)

    def currentPage(self): # This couldve used better instructions on octopus.
        return f"Current page is {self.currentpage+1}"
    
    def totalPages(self): # This couldve used better instructions on octopus.
        return f"Total amount of pages = {int(len(self.items) // self.page_size)+1}"
    
    def gotoPage(self, pagenumber):
        max_page = int(len(self.items) // self.page_size)
        if pagenumber >= 0 and pagenumber < max_page:
            self.currentpage = pagenumber
            return
        elif pagenumber > max_page:
            print("GoTo error: page number too high. Setting it to the max instead")
            pagenumber = max_page
        elif pagenumber < 0:
            print("GoTo error: page number too low. Setting it to page 1 instead")
            pagenumber = 0
        
        self.currentpage = pagenumber



alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)
p.getVisibleItems() 
# ["a", "b", "c", "d"]
p.nextPage()
p.getVisibleItems()
# # ["e", "f", "g", "h"]
p.lastPage()
p.getVisibleItems()
# # ["y", "z"]
print(p.totalPages())
print(p.currentPage())
p.gotoPage(3)
print(p.currentPage())
p.gotoPage(10)
print(p.currentPage())
p.gotoPage(-5)
print(p.currentPage())