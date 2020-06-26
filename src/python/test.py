import unittest

from alphabet_encryption import alphabet_encryption


class TestEncryption(unittest.TestCase):
    def test_encryption(self):
        """
        Testing alphabet encrytion function
        """
        test = "here is a string"
        self.assertEquals(alphabet_encryption.Encrypt(test),
                          'sviv rh z hgirmt')


if __name__ == '__main__':
    unittest.main()
